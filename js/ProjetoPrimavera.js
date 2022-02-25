function primavera(){
    const d = new Date();
    const p = new Date(2022, 2, 20, 15, 33);
    const fimMes = 28;

    let dias = 28 - d.getDate() + p.getDate();
    let hora = 0;

    if (p.getHours() > d.getHours()) {
        hora = p.getHours() - d.getHours(); 
    }

    document.getElementById('hoje').innerHTML = d;
    document.getElementById('primavera').innerHTML = p;
    document.getElementById('hora').innerHTML = hora;
}