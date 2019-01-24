<template>
<div
  class="tree-node"
  @click.stop="handleClick"
  v-show="node.visible"
  :class="{
    'is-expanded': expanded,
    'is-current': tree.store.currentNode === node,
    'is-hidden': !node.visible,
    'is-focusable': !node.disabled,
    'is-checked': !node.disabled && node.checked
  }"
  role="treeitem"
  tabindex="-1"
  :aria-expanded="expanded"
  :aria-disabled="node.disabled"
  :aria-checked="node.checked"
  :draggable="tree.draggable"
  @dragstart.stop="handleDragStart"
  @dragover.stop="handleDragOver"
  @dragend.stop="handleDragEnd"
  @drop.stop="handleDrop"
  ref="node"
>
  <div
    class="tree-node-content"
    :style="{ 'padding-left': (node.level - 1) * tree.indent + 'px' }"
  >
    <v-btn
      icon
      flat
      :class="{ 'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded }"
      class="material-icons tree-node-expand-icon"
      @click.stop="handleExpandIconClick"
    >
      <v-icon>keyboard_arrow_right</v-icon>
    </v-btn>

    <span class="tree-node-label">{{ node.label }}</span>
  </div>

  <div
    class="tree-node-children"
    v-if="!renderAfterExpand || childNodeRendered"
    v-show="expanded"
    role="group"
    :aria-expanded="expanded"
  >
    <tree-node
      :render-content="renderContent"
      v-for="child in node.childNodes"
      :render-after-expand="renderAfterExpand"
      :key="getNodeKey(child)"
      :node="child"
      @node-expand="handleChildNodeExpand">
    </tree-node>
  </div>
</div>
</template>

<script>
import { getNodeKey } from './model/util';

export default {
  name: 'TreeNode',

  componentName: 'TreeNode',

  props: {
    node: {
      default() {
        return {};
      }
    },
    props: {},
    renderContent: Function,
    renderAfterExpand: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      tree: null,
      expanded: false,
      childNodeRendered: false,
      showCheckbox: false,
      oldChecked: null,
      oldIndeterminate: null
    };
  },

  watch: {
    'node.indeterminate'(val) {
      this.handleSelectChange(this.node.checked, val);
    },

    'node.checked'(val) {
      this.handleSelectChange(val, this.node.indeterminate);
    },

    'node.expanded'(val) {
      this.$nextTick(() => (this.expanded = val));
      if (val) {
        this.childNodeRendered = true;
      }
    }
  },

  methods: {
    getNodeKey(node) {
      return getNodeKey(this.tree.nodeKey, node.data);
    },

    handleSelectChange(checked, indeterminate) {
      if (
        this.oldChecked !== checked &&
        this.oldIndeterminate !== indeterminate
      ) {
        this.tree.$emit('check-change', this.node.data, checked, indeterminate);
      }
      this.oldChecked = checked;
      this.indeterminate = indeterminate;
    },

    handleClick() {
      const store = this.tree.store;
      store.setCurrentNode(this.node);
      this.tree.$emit(
        'current-change',
        store.currentNode ? store.currentNode.data : null,
        store.currentNode
      );
      this.tree.currentNode = this;
      if (this.tree.expandOnClickNode) {
        this.handleExpandIconClick();
      }
      this.tree.$emit('node-click', this.node.data, this.node, this);
    },

    handleExpandIconClick() {
      if (this.node.isLeaf) return;
      if (this.expanded) {
        this.tree.$emit('node-collapse', this.node.data, this.node, this);
        this.node.collapse();
      } else {
        this.node.expand();
        this.$emit('node-expand', this.node.data, this.node, this);
      }
    },

    handleCheckChange(value, ev) {
      this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
      this.$nextTick(() => {
        const store = this.tree.store;
        this.tree.$emit('check', this.node.data, {
          checkedNodes: store.getCheckedNodes(),
          checkedKeys: store.getCheckedKeys(),
          halfCheckedNodes: store.getHalfCheckedNodes(),
          halfCheckedKeys: store.getHalfCheckedKeys()
        });
      });
    },

    handleChildNodeExpand(nodeData, node, instance) {
      this.tree.$emit('node-expand', nodeData, node, instance);
    },

    handleDragStart(event) {
      this.tree.$emit('tree-node-drag-start', event, this);
    },

    handleDragOver(event) {
      this.tree.$emit('tree-node-drag-over', event, this);
      event.preventDefault();
    },

    handleDrop(event) {
      event.preventDefault();
    },

    handleDragEnd(event) {
      this.tree.$emit('tree-node-drag-end', event, this);
    }
  },

  created() {
    const parent = this.$parent;

    if (parent.isTree) {
      this.tree = parent;
    } else {
      this.tree = parent.tree;
    }

    const tree = this.tree;
    if (!tree) {
      console.warn("Can not find node's tree.");
    }

    const props = tree.props || {};
    const childrenKey = props['children'] || 'children';

    this.$watch(`node.data.${childrenKey}`, () => {
      this.node.updateChildren();
    });

    this.showCheckbox = tree.showCheckbox;

    if (this.node.expanded) {
      this.expanded = true;
      this.childNodeRendered = true;
    }

    if (this.tree.accordion) {
      this.$on('tree-node-expand', (node) => {
        if (this.node !== node) {
          this.node.collapse();
        }
      });
    }
  }
};
</script>

<style lang="stylus">
.tree-node .material-icons {
  width: 24px;
  height: 24px;
  font-size: 16px;
  color: #afafaf;
  padding: 0px;
  margin: 0;
}

.tree-node .material-icons.is-leaf {
  color: transparent;
}
</style>
