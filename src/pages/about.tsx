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
    IonToolbar,
    IonText
    } from '@ionic/react';
  import { book, build, colorFill, grid } from 'ionicons/icons';
  import React from 'react';
  
  const AboutUs: React.FC = () => {
    return (
      <IonPage className="about-page">
        <IonHeader >
          <IonToolbar className="header" color="primary">
            <IonButtons slot="start" >
              <IonMenuButton />
            </IonButtons>
            <IonTitle className="header">
              <div className="candidate-bar">
                <div className="page-name "> About Us</div>
                <div className="logo">
                  <a href="home">
                    <img src="/assets/logo.png" alt="Logo"/>
                  </a> 
                </div>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="profile-image bg-gray">
            <img src="/assets/gallery_6.jpg" alt="Profile Image"/>
          </div>
          <div className="about-content bg-gray">
            <div>
              <IonCardHeader className="title-section bg-gray">
                <IonCardTitle className="title ">Devendra Fadnavis</IonCardTitle>
              </IonCardHeader>
              <IonText>
                <p>             
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not.
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not.
                </p>
              </IonText>
              <IonText>
                <p>             
                  printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not.
                  dustry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not.
                </p>
              </IonText>
            </div>
            <div>
              <IonTitle className="sm-heading">About My Constituency</IonTitle>
              <IonText>
                <p>             
                  a galley of type and scrambled it to make a type 
                  specimen book. It has survived not.printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not.
                  dustry's standard dummy text ever since the 1500s,
                  when an unknown printer took 
                </p>
              </IonText>
            </div>
            <div>
              <IonTitle className="sm-heading">My Mission</IonTitle>
                <IonText>
                  <p>             
                    standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not.
                    dustry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not.
                  </p>
                </IonText>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default AboutUs;
  