<template>
  <div class='contentWrapper'>
    <x-table v-bind='schema' />
  </div>
</template>

<script>
import XTable from '../components/XTable';

export default {
  name: 'xtable-page',
  components: {
    XTable
  },
  computed: {},
  data: function() {
    return {
      schema: {
        headers: [
          { value: 'no', text: 'No' },
          {
            value: 'name',
            text: 'Name',
            render: (item) => {
              const { description, name } = item;
              return `<div class="tooltip"> ${name}
            <i class="material-icons infoIcon color-primary position-relative" style="top:3px; opacity:.6">more</i>
            <span class="tooltiptext"> ${description} </span></div>`;
            }
          },
          { value: 'age', text: 'Age' },
          { value: 'action', text: 'Actions' }
        ],
        items: [
          {
            no: '1',
            age: '30',
            name: 'John',
            description: 'He has been single for 30 years'
          }
        ],
        actions: [
          {
            content: 'edit',
            square: true,
            outline: true,
            borderRadius: 4,
            color: '#666',
            render: (item) => true,
            click: (item) => {
              this.$router.push({
                name: 'taskEdit',
                params: { task: item }
              });
            }
          },
          {
            content: 'delete_outline',
            square: true,
            outline: true,
            borderRadius: 4,
            color: '#D0707B',
            class: 'actionWarning',
            render: (item) => false,
            click: (item) => {
              console.log(item);
            }
          }
        ]
      }
    };
  }
};
</script>

<style>
.contentWrapper {
  width: 100%;
  max-width: 600px;
  margin: auto;
}
</style>
