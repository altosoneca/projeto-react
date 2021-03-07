export default function Quadrados() {

    function Quadrado(){
        var d = new Date();
        var n = d.getDay();
        var cores = ["#12100E", "#30321C" ,"#4A4B2F" ,"#6B654B" ,"#D4DF9E"]
        var cor1 = cores[Math.floor(Math.random()*cores.length)];
        var cor2 = cores[Math.floor(Math.random()*cores.length)];
        cor2 = cor1 === cor2 ? cores[Math.floor(Math.random()*cores.length)] : cor2;
        var directions = ["to bottom left","to bottom right","to top left","to top right"]
        var direction = directions[Math.floor(Math.random()*directions.length)]
        return (
            <div style={{background: `linear-gradient(${direction},${cor1} 49%,${cor2} 50%)`}} className="square col-md-2"/>
        )
    }

    function QuadradosCompletos() {
        var rows = [];

        for (var i = 0; i < 48; i++) {  
            rows.push(<Quadrado key={i}/> );
        }
        return <div className="row">{rows}</div>

      }

  return QuadradosCompletos()
    
  
}