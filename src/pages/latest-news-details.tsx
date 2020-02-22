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
    IonButton,
    IonText,
    } from '@ionic/react';
  import { book, build, colorFill, grid } from 'ionicons/icons';
  import React from 'react';
  
  const LatestNewsDetails: React.FC = () => {
    return (
      <IonPage className="latest-news-details">
        <IonHeader >
          <IonToolbar className="header" color="primary">
            <IonButtons slot="start" >
              <IonMenuButton />
            </IonButtons>
            <IonTitle className="header">
              <div className="candidate-bar">
                  <div className="page-name "></div>
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
        <div className="latest-news">
          <IonCard className="card">
            <IonCardHeader className="card-header">
              <img src="/assets/news_1.jpg" alt="Recent Activity" title="Recent Activity" />
            </IonCardHeader>
            <div className="card-content-wrapper">
              <IonCardTitle class="heading">Lorem Ipsum dummy text</IonCardTitle>
              <IonCardContent className="card-content">
                <IonText>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    tially unchanged. It was popularised in the 1960s text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    tially unchanged. It was popularised in the 1960s  
                  </p> 
                </IonText>
              </IonCardContent>
            </div>
          </IonCard>
        </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default LatestNewsDetails;
  