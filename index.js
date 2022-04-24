var candA = 0;
var candB = 0;
var candC = 0;
var candD = 0;
var btn = document.querySelector('button');

btn.addEventListener("click", resultat);

function resultat() {
  candA = parseInt(document.getElementById("can1").value);
  candB = parseInt(document.getElementById("can2").value);
  candC = parseInt(document.getElementById("can3").value);
  candD = parseInt(document.getElementById("can4").value);
  var totalResultat = candA + candB + candC + candD;
  //Pourcentage calcul
  var pourcentageA = retourPourcentage(candA, totalResultat).toFixed(2);
  var pourcentageB = retourPourcentage(candB, totalResultat).toFixed(2);
  var pourcentageC = retourPourcentage(candC, totalResultat).toFixed(2);
  var pourcentageD = retourPourcentage(candD, totalResultat).toFixed(2);
  // si le candidat A à plus de 50%
  if (pourcentageA > 50) {
    alert("Candidat A est élu avec " + pourcentageA + " % de voix.");
  }
  // si le candidat A ne passe pas le second tour (-12.5%)
  if (pourcentageA < 12.5) {
    alert("Candidat A est battu avec " + pourcentageA + " % de voix.")
  }
  // si le candidat A est en ballotage favorable (+= 12.5% et moins de 50% et le pourcentage le plus élevé)
  if (pourcentageA >= 12.5 && pourcentageA <= 50 && pourcentageA > pourcentageB && pourcentageA > pourcentageC && pourcentageA > pourcentageD) {
    alert("Candidat A est en ballotage favorable avec " + pourcentageA + " % de voix.")
  }
  // si le candidat A est en ballotage défavorable (+= 12.5 et le pourcentage plus bas qu'un autre candidat)
  if (pourcentageA >= 12.5 && pourcentageA <= 50 && pourcentageA < pourcentageB && pourcentageA < pourcentageC && pourcentageA < pourcentageD) {
    alert("Candidat A est en ballotage défavorable avec " + pourcentageA + " % de voix.")
  }
}


function retourPourcentage(candidat, resultatFinal) {
  return (candidat / resultatFinal) * 100;
}
