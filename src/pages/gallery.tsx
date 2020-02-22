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
    IonRow,
    IonCol,
    IonGrid
    } from '@ionic/react';
  import { book, build, colorFill, grid } from 'ionicons/icons';
  import React from 'react';
  
  const Gallery: React.FC = () => {
    return (
      <IonPage className="gallery-page">
        <IonHeader >
          <IonToolbar className="header" color="primary">
            <IonButtons slot="start" >
              <IonMenuButton />
            </IonButtons>
            <IonTitle className="header">
              <div className="candidate-bar">
                <div className="page-name ">Gallery </div>
                <div className="logo">
                  <a href="home">
                    <img src="/assets/logo.png" title="logo" alt="Logo"/>
                  </a> 
                </div>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="gallery">
            <div className="gallery-images">
              <IonGrid className="section ion-justify-content-around">
                <IonRow className="ion-text-center">
                  <IonCol>
                  <img src="/assets/gallery_4.jpg" alt="Gallery Image" title="Gallery Image" className="image"/>
                  </IonCol>
                  <IonCol>
                  <img src="/assets/gallery_3.jpg" alt="Gallery Image" title="Gallery Image" className="image"/>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonGrid className="section ion-justify-content-around">
                <IonRow className="ion-text-center">
                  <IonCol >
                  <img src="/assets/gallery_6.jpg" alt="Gallery Image" title="Gallery Image" className="image"/>
                  </IonCol>
                  <IonCol >
                  <img src="/assets/gallery_7.jpg" alt="Gallery Image" title="Gallery Image" className="image"/>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonGrid className="section ion-justify-content-around">
                <IonRow className="ion-text-center">
                  <IonCol >
                  <img src="/assets/gallery_8.jpg" alt="Gallery Image" title="Gallery Image" className="image"/>
                  </IonCol>
                  <IonCol >
                  <img src="/assets/gallery_9.jpg" alt="Gallery Image" title="Gallery Image" className="image"/>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonGrid className="section ion-justify-content-around">
                <IonRow className="ion-text-center">
                  <IonCol >
                  <img src="/assets/gallery_4.jpg" alt="Gallery Image" title="Gallery Image" className="image"/>
                  </IonCol>
                  <IonCol >
                  <img src="/assets/gallery_3.jpg" alt="Gallery Image" title="Gallery Image" className="image"/>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>    
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Gallery;
  