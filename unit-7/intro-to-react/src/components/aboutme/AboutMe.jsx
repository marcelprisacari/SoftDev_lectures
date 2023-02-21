function AboutMe() {

    const city = "Chisnau";
    const country = "Moldova";


    let styles = {
        ul: {
            textAlign: "left",
            color: "red"
        },
        p: {
            fontSize: "20pt"
        }
    }

    return(

    <p style={styles.p}>I grew up in {city}, {country}
    <br />
    Last weekend I went to the following places:
    <ul style={{textAlign: "left", color: "red"}}>
        <li>Target</li>
        <li>Gym</li>
        <li>Bagel Place</li>
    </ul>
    
    </p>
    )
}

export default AboutMe;


/* 
  - Create a new folder called aboutme within the components folder.
  - Create a new file inside the folder called AboutMe.jsx.
  - Create a <p> tag that notes where you grew up. 
    - Use variables for city and state.
  - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
  - Export the component.
  - Import the component into App.jsx and mount it between the Header and Footer components.
*/