function Hello1(){
    return (
  <>
    <form action="" method="GET">
    Kullanıcı Adınızı Giriniz: <input maxlenght="5" type="text"></input><br/>
    Sifrenizi giriniz: <input type="password"></input><br/>
    Tercih Edilen Universite: <input readOnly type="text" value="Bilkent University"></input>
    <input type="numbers" min="1" max="2"></input>
    <input type="file"></input><br/>

    
    <label>
        <input type="radio" name="cinsiyet" value="Erkek"></input>Erkek 
          <input type="radio" name="cinsiyet" value="Kadın"></input>Kadın <br/>
          
    </label>
    <label> <input required type="checkbox"></input> Kuralları kabul ediyorum.</label> <br></br>
    <input type="submit" value="Gonder"></input>
    <input type="reset" value="Sıfırla"></input>

    </form>
    <input type="color"></input><br/>
    <input type="date"></input> <br/>
    <input type="datetime-local"></input><br/>
    <input type="number" min="0" max="5"></input>,
    
  <br /><br /><br /><br /><><div><h1>Hosgeldiniz ilk satır</h1><h2>Hosgeldiniz ikinci satır</h2><p>Paragraf buradan baslıyacak.</p></div>
            <div>2.bolum</div>
            <div>3.bolum</div>
            <div><ol>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ol></div>


            <form>
                <input text />
                <input id="ccc" />
                <input label />
                <input submit />
                <input value />


            </form>

        </></>


  
        
    )
    
}
export default Hello1;