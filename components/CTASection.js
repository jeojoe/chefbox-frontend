import React from 'react';
import Head from 'next/head';
import stylesheet from '../styles/components/CTASection.css';

const CTASection = () => (
  <div className="box" id="cta-section">
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <h1>สั่งวัตถุดิบที่คุณต้องการ</h1>
    <p>วัตถุดิบจะถูกส่งถึงมือคุณในวันถัดไป</p>
    <div className="contact">
      เพียงคุณ add มาที่ line : @chefbox.delivery หรือโทรมาที่เบอร์ 092-016-0836
    </div>
    <div className="button accent">
      เลือกเมนู {'>'}
    </div>
  </div>
);

export default CTASection;
