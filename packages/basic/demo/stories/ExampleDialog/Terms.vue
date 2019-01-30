<template>
  <div>
    <div class="text-wrap">
      <h2>Terms of Service</h2>
      <h3>Application and Membership</h3>
      <ul>
        <li>Membership in the Program will be forfeited when the member is inactive on using the Mobile App for a year from date of download. All remaining points will be forfeited as well. “Inactive” means failure to earn or redeem points using the Mobile App.</li>
        <li>The Mobile App may be used in all participating Stores and partner establishments as indicated in the Member’s Manual and will earn points by presenting the same before paying.</li>
        <li>The customer agrees to provide his or her information upon registration through the Mobile App application.</li>
        <li>Company Mobile App gives its members the freedom to update their information, view and track their points and transactions; and avail of member exclusive promotions.</li>
      </ul>
      <h3>Earning and Redemption of Points</h3>
      <ul>
        <li>Points can be earned and redeemed during the membership period.</li>
        <li>Rules for points and conversion to dollor value are described in About Company Program tab which can also be found at the settings menu. Points earned are automatically convertible to equivalent dollor value and may be redeemed at participating stores.  Seserves the right to change the value of earned Points at any time without need of prior notice.</li>
        <li>Points earned may be used to pay for any product in any participating Stores except for purchase of Company Gift Certificates and other items or services that RI may include or exclude from time to time at its sole discretion without the need of prior notice.</li>
        <li>Earning of Company Points is limited to purchase of merchandise at selling price. Points cannot be earned for wholesale, as defined by the participating store or transactions with corporate discounts, purchases made using Company Points, purchase of Company Gift Certificates, Business Center payment transactions, exchange of goods, Company Membership Application Kit and non-merchandise transactions. RI reserves the right to include or exclude any product/s or service/s at any time at its sole discretion without need of prior notice.</li>
        <li>The member must present his/her Mobile App prior to any transaction. Redemption of points can only be done by the Member personally. For this purpose, Member is required to present a valid ID upon redemption. All redeemed Points may no longer be changed or cancelled.</li>
        <li>It is the responsibility of the Member to keep all transaction receipts should there be a request for points verification.</li>
        <li>Points earned cannot be exchanged for cash. Exchange or return of goods is not eligible to earn points. RI reserves the right to make adjustments on earned Points as it sees fit including, but not limited to; deduction of Points arising from returned goods or services or from disputes. Point computations on RI’s records shall be deemed correct and any dispute as to the number of Points that the Member can redeem shall be determined exclusively by RI. Should any conflict arise, cardholder agrees that the records of RI shall take precedence over other records, and that the decision of RI shall be deemed correct and final.</li>
        <li>Member hereby releases RI, the Stores and all its officers and representatives free and harmless from any claim or damage resulting from the use, redemption of Points and on the issuance of the Mobile App. Goods or services redeemed shall be subject to the return and exchange policy of the participating Stores and RI shall have no responsibility for any claims or dispute relative to the goods or services redeemed.</li>
      </ul>
      <h3>Other Conditions</h3>
      <ul>
        <li>Upon Company App registration, the member agrees to the “Terms and Conditions” and “Privacy Policy” stated in any channel not limited to Company Website or Mobile Application.</li>
        <li>The provisions of these “Terms and Conditions” as well as all and any other manual, rules and procedures issued by RI from time to time in connection herewith may be cancelled, changed or modified at any time and for whatever reason at the sole option of RI without need of prior notice.</li>
        <li>RI reserves the right to terminate the Program at any time at its sole discretion. In the event of termination of the Program, all accrued Points earned in the Mobile App will be terminated unless used within 60 days after the Program’s official date of termination.</li>
        <li>The Company Mobile App is and shall remain the property of RI. RI reserves the right to terminate or revoke any Membership at its sole discretion in the event of abuse, fraud or violation of any of the provisions of the “Terms and Conditions”, rules, regulations, manuals and policies as determined solely by RI. Termination of the Membership results to termination and forfeiture of any and all Points earned.</li>
        <li>Any breach of these “Terms and Conditions”, rules, regulations, manuals and policies, whether intentional or not, may result in the termination of the membership, forfeiture of Points and cancellation of all privileges as described above.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Terms',
  data() {
    return {};
  }
};
</script>

<style lang='stylus' scoped>
@import '../../../src/styles/_variables.styl';

.text-wrap {
  text-align: left;
  color: $dark;

  h2 {
    font-size: 24px;
    margin-bottom: 18px;
  }

  h3 {
    font-size: 16px;
    line-height: 2;
    margin-bottom: 8px;
  }

  p, li {
    font-size: 13px;
    line-height: 1.6;
    letter-spacing: 0.5;
    margin-bottom: 10px;
    color: $slate-grey;
  }

  ul {
    margin-bottom: 20px;
    padding-left: 20px;
  }
}
</style>
