import { IonGrid, IonRow, IonCol } from "@ionic/react";

function Navbar() {
  return (
    <nav>
    <IonGrid>
      <IonRow>
        <IonCol size="3">
          <p>Portfolio</p>
        </IonCol>
        <IonCol size="9" >
          <div className="ion-text-center">
            <p><a href="#">Projects</a></p>
            <p><a href="#">Skill</a></p>
            <p><a href="#">Who</a></p>
            <p><a href="#">Home</a></p>
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
    </nav>
  );
}

export default Navbar;
