import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonSearchbar,
    IonToolbar
    } from '@ionic/react';
  import { book, build, colorFill, grid } from 'ionicons/icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHospital,faClinicMedical } from '@fortawesome/free-solid-svg-icons'
  import React from 'react';
  

  const EmergancyContact: React.FC = () => {
    return (
      <IonPage className="emergency-contact">
        <IonHeader >
          <IonToolbar className="header" color="primary">
              <IonButtons slot="start" >
              <IonMenuButton />
            </IonButtons>
            <IonTitle className="header">
              <div className="candidate-bar">
                <div className="page-name ">Emergancy Contact</div>
                <div className="logo">
                  <a href="home">
                    <img src="/assets/logo.png" title="Logo" alt="Logo"/>
                  </a> 
                </div>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="contact-wrapper">
          <div className="search-bar">
            <IonSearchbar showCancelButton="focus"></IonSearchbar>
          </div>
          <div className="hospital-no">
            <h4 className="m-0 sm-heading ">
                <FontAwesomeIcon icon={faClinicMedical} color="black" className="icon" />  Hospital
            </h4>
            <table className="table">
              <thead> 
                <tr>
                  <th>Name</th>
                  <th>Contact No.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Global Hospital</td>
                  <td><a href="tel:8796969608">+91 8796969608</a></td>
                </tr>
                <tr>
                  <td>ONP Meera Hospital</td>
                  <td><a href="tel:9672354584">+91 9672354584</a></td>
                </tr>
                <tr>
                  <td>Jehangir Hospital</td>
                  <td><a href="tel:7426848212">+91 7426848212</a></td> 
                </tr>
              </tbody>
            </table>                        
          </div>
          <div className="police-no">
            <h4 className="m-0 sm-heading"> 
                <FontAwesomeIcon icon={faHospital} color="black" className="icon" />  Police Station
            </h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact No.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sinhgad Road Police Station</td>
                  <td><a href="tel:24348270">020 24348270</a></td>
                </tr>
                <tr>
                  <td>Alankar Police Station</td>
                  <td><a href="tel:25445003">020 25445003</a></td>
                </tr>
                <tr>
                  <td>Kothrud Police Station</td>
                  <td><a href="tel:25391515">020 25391515</a></td>
                </tr>
              </tbody>
            </table>                       
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default EmergancyContact;
  