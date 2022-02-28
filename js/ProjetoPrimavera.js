function primavera(){
    const d=new Date();
    const p=new Date(2022,2,20,15,33);
    const fimmes=28;
    let hora=0;
    let minutos=0;
    dias=28-d.getDate()+p.getDate();
    if(p.getHours()>d.getHours()){
        hora=p.getHours()-d.getHours();
    }
    else{
        hora=24-d.getHours()+p.getHours();
    }
    if(p.getMinutes()>d.getMinutes()){
        minutos=p.getMinutes()-d.getMinutes();
    } else{
        minutos=60-d.getMinutes()+p.getMinutes();
    }
    let tempo="Faltam "+dias+" dias, "+hora+" horas, "+minutos+" minutos"+" para a primavera!";
    document.getElementById('tempo').innerHTML=tempo; 
}
