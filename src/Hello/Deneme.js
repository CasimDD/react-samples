function Deneme(){
        return(
            <>
        <input></input>
            
            <h1>CONTROL noktası</h1>
            <ol><li>One</li><li>Two</li><li>Three</li>
            </ol>

            <form>
            
                <label for ="adet">1 ve 5 arasında bir deger giriniz :</label>
                <input type="number" id="adet" name="adet" min="1" max="5"></input><br/>
                <input type="submit" value="Gönder"></input>
            </form>
            </>
        
        )

}
export default Deneme;