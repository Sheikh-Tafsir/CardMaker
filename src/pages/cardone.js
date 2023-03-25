import React, {useState, useEffect, useRef } from "react"
import cardoneStyles from '../styles/cardone.module.css'

import Button from 'react-bootstrap/Button';

import { FaSearch } from 'react-icons/fa';
import {BsTelephoneFill} from 'react-icons/bs';
import {HiLocationMarker} from 'react-icons/hi';
import {GrMail} from 'react-icons/gr';
import {RiEarthFill} from 'react-icons/ri';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import html2pdf from 'html2pdf.js';

const cardone = () => {
    const [name, setName] = useState("Sheikh Tafsir");
    const [job, setJob] = useState("BSc Undergrade");
    const [address, setAddress] = useState("Tongi, Gazipur");
    const [phoneno, setPhoneno] = useState("01817530115");
    const [eemail, setEemail] = useState("190041130tafsir@gmail");
    const [website, setWebsite] = useState("tmr.rahman.github.io");

    const componentRef = useRef(null);
    const [pdfUrl, setPdfUrl] = useState(null);

    const [cardColor, setCardColor] = useState(0);

    /*const handleDownload = () => {
      const element = componentRef.current;
      const options = {
        filename: 'my-document.pdf',
        jsPDF: { 
          unit: 'px', 
          format: 'a4', 
          orientation: 'portrait' 
        }
      };
      html2pdf().set(options).from(element).save();
    };*/

    const handleDownload = () => {
      const element = componentRef.current;
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('my_business_card.pdf');
      });
    };

    /*const handleDownload = () => {
      const element = componentRef.current;
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        const blob = pdf.output('blob');
        const url = window.URL.createObjectURL(blob);
        setPdfUrl(url);
      });
    };*/

    const changeCardColorZero = () => {
      setCardColor(0);
    }
    const changeCardColorOne = () => {
      setCardColor(1);
    }
    const changeCardColorTwo = () => {
      setCardColor(2);
    }
    const changeCardColorThree = () => {
      setCardColor(3);
    }
    const changeCardColorFour = () => {
      setCardColor(4);
    }

  return (
    <>
      <div className={cardoneStyles.cardback} >
          <div className={cardoneStyles.leftsidecolor}>
              <Button className={cardoneStyles.leftsidecolorbutton} onClick={changeCardColorOne}></Button>
              <Button className={cardoneStyles.leftsidecolorbutton} onClick={changeCardColorTwo}></Button>
          </div>
          <div className={`${cardoneStyles.card} ${cardColor==1 ? cardoneStyles.cardColorOne : cardColor==2 ? cardoneStyles.cardColorTwo : cardColor==3 ? cardoneStyles.cardColorThree : cardColor==4 ? cardoneStyles.cardColorFour : cardoneStyles.card} `} ref={componentRef}>
              <div className={cardoneStyles.contacts}>
                  <HiLocationMarker className={cardoneStyles.contacticons}/>
                  <input type="text" value={address} onChange={(event) => {setAddress(event.target.value);}} className={cardoneStyles.address}></input><br/>
                  <BsTelephoneFill className={cardoneStyles.contacticons}/>
                  <input type="text" value={phoneno} onChange={(event) => {setPhoneno(event.target.value);}} className={cardoneStyles.phoneno}></input><br/>
                  <GrMail className={cardoneStyles.contacticons}/>
                  <input type="email" value={eemail} onChange={(event) => {setEemail(event.target.value);}} className={cardoneStyles.eemail}></input><br/>
                  <RiEarthFill className={cardoneStyles.contacticons}/>
                  <input type="text" value={website} onChange={(event) => {setWebsite(event.target.value);}} className={cardoneStyles.website}></input><br/>
              </div>
              <div className={cardoneStyles.personal}>
                  <input type="text" value={name} onChange={(event) => {setName(event.target.value);}} className={cardoneStyles.name}></input>
                  <input type="text" value={job} onChange={(event) => {setJob(event.target.value);}} className={cardoneStyles.job}></input>
                  <div className={cardoneStyles.personalafterblock}></div>
              </div>
          </div>
          <div className={cardoneStyles.rightsidecolor}>
              <Button className={cardoneStyles.rightsidecolorbutton} onClick={changeCardColorThree}></Button>
              <Button className={cardoneStyles.rightsidecolorbutton} onClick={changeCardColorFour}></Button>
          </div>
          <div className={cardoneStyles.downloadbutton}>
              <Button onClick={changeCardColorZero}>Default</Button>
              <Button onClick={handleDownload}>Download</Button>
          </div>
          
      </div>
      
      {pdfUrl && (
        <a href={pdfUrl} download="my-document.pdf">Download PDF</a>
      )}
    </>

  )
}

export default cardone