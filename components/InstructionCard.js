import React from 'react';
import Head from 'next/head';
import stylesheet from '../styles/components/InstructionCard.css';

const InstructionCard = ({ image, title, description, onDelete }) => (
  <div className="instruction-card">
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <img src="/static/instruction-1.png" alt="Chefbox Instruction" />
    <h3>1. เตรียมเส้น สปาเกตตี้</h3>
    <p>ต้มน้ำให้เดือดใส่เกลือและน้ำมันมะกอกเล็กน้อย ตามด้วยเส้นลงไป ต้ม 7-8 นาที หรือ จนเส้นสุก แล้วนำขึ้นพักไว้</p>
  </div>
);

export default InstructionCard;
