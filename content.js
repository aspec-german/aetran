var vt;

window.onload = function () {
  var container = document.getElementById("container");
  var msg = document.getElementById("msg");
  vt = new VTree(container);
  var reader = new VTree.reader.Object();

  function fileToText(file, callback) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      callback(reader.result);
    };
  }

  function updateTree() {

    // Best practice totally
    var s =`[{



      "Sexuell":
        [{
          "Orientiert nach Gender": "affinitive Orientierung",
          "affinitive Orientierung":
            [{
              "Abhängig vom eigenem Gender": "juvelic",
              "juvelic":
              [{
              	"Zum eigenem Gender":"Homosexuell, Amberian",
              	"Männlich smushed":"Männlich smushed...",
              	"Männlich smushed...":
              	[{
              		"Männlich smushed u.a. männlich":"Achillean, Schwul",
              		"Mann smushed nur Männer":"Schwul",
	              	"Männlich smushed u.a. männlich & enby":"Asterosian, Schwul",     
	              	"Männlich smushed u.a. enby":"Astroidian",
              		"Weitere Begriffe":"Androcupiosappho"
              	}],
              	"Weiblich smushed":"Weiblich smushed...",
              	"Weiblich smushed...":
              	[{
	              	"Weiblich smushed u.a. weiblich":"Agatic, Lesbisch, Sapphic",
	              	"Frau smushed nur Frauen":"Lesbisch",
	              	"Weiblich smushed weiblich & enby":"Amethystian, Lesbisch, Sapphic",         
	              	"Weiblich smushed u.a. enby":"Asterian"
              	}],
              	"Enby smushed":"Enby Smushed",
              	"Enby Smushed":
              	[{
	              	"Enby smushed Enby":"Aliamoric",
	              	"Enby smushed Enby und Männer":"Schwul",
	              	"Enby smushed Enby und Frauen":"Brownitian, Lesbisch"
              	}],
              	"1 Agender smushed":"Agenamoric",
              	"Agenamoric":
              	[{
	              	"1 Agender orientert sich":"Agenamoric",
	              	"1 Agender smushed u.a. Enbys":"Agenidian, Wisterian",
	              	"1 Agender smushed u.a. männlich":"Agenilian, Thistlian",
	              	"1 Agender smushed nur männlich":"Yae",
	              	"1 Agender smushed M-Spec":"Agenipian",
	              	"1 Agender smushed u.a. weiblich":"Agenirian, Azalian",
	              	"1 Agender smushed nur Frauen":"Naneosexuell",
	              	"1 Agender smushed u.a. xenic":"Agenixian",
	              	"1 Agender smushed Agender":"Gaesexuell"
              	}],
              	"1 Anonbinary smushed":"Anonbinary...",
              	"Anonbinary...":
              	[{
	              	"1 Anonbinary smushed nur Agender":"Argelinne",
	              	"Weitere Begriffe:":"Artudette"
              	}],
              	"Genderfluid smushed":"Genderfluid smushed...",
              	"Genderfluid smushed...":
              	[{
              		"Genderfluid smushed weiblich":"Auriora"
              	}],
              	"Binär zu Binär, egal wie":"Binian",
              	"Mehrere bestimmte Gender zu":"Mehrere bestimmte Gender zu...",
              	"Mehrere bestimmte Gender zu...":
              	[{
	              	"... smushed M-Spec binär":"Anfisian, Aurian",
	              	"... smushed Männer":"Azurian",
	              	"... smushed Enby und Männer":"Aventurian",
	              	"... smushed Enby und Frauen":"Axinitian, Benitoitic",
	              	"Nicht-Mann smushed Nicht-Mann":"Daunic",
	              	"Weitere Begriffe":"Alexandritic"
              	}]
              }],
              "unabhängig vom eigenem Gender":"non-juvelic",
              "non-juvelic":
              [{
              	"Zu mehreren Gender":"M-Spec",
              	"M-Spec":
              	[{
              		"Umbrella Term":"Multisexuell, Plurisexuell",
	              	"Unabhängig vom Gender":"Pansexuell, Ambivaic, Anthro",
	              	"Unabhängig vom Gender #2":"Blanesexual",
	              	"Zu allen Gender":"Omnisexuell, Ambivaic",
	              	"Mindestens 2 Gender":"Bisexuell",
	              	"Smushed beide binäre Gender":"Binsexual",
	              	"Vielleicht mindestens 2 Gender":"Bicurious, Biflexible, Biflux",
	              	"Zu vielen, aber nicht allen Gender":"Polysexual",
	              	"Präferenz zu neutrale Gender":"Ainic",
              		"Smushed u.a. Agender-Menschen":"Ageninic",
              		"Smushed nur neutrale Gender":"Neusexuell",
	              	"Weitere Begriffe":"Ambisexuell",
	              	"Smushed Faunagender":"Anuafsexuell",
	              	"Smushed Kingender":"Anuafsexuell",
	              	"Smushed wechselnde Gender":"Aquian",
	              	"Smushed Bigender":"Bigeninic",
	              	"Mindestens 2 Gender ohne Männer":"Binitor",
	              	"Mindestens 2 Gender ohne Frauen":"Binotrix"
              	}],
              	"Zu einem Gender":"Monosexuell",
              	"Monosexuell":
              	[{
              		"Smushed vielleicht männlich":"Androcurios",
              		"Smushed hauptsächlich männlich":"Androflexible",
              		"Smushed ausschließlich männlich":"Androgynosexuell",
              		"Smushed ausschließlich Männer":"Androsexuell",
              		"Smushed genderfluid strayt girls":"Aphrodisexual"
              	}],
              	"Mindestens eine Orientierung":"Amplusic",
              	"Die Eigenaziehung variiert":"Autoflux",
              	"Ausnahme für 1 bestimmte Person":"Boreasexuell",
	            "Smushed binäre Gender":"Binaric, Boric"
              }]
            }],
          "Orientiert nach Körpermerkmalen": "Körpererkmale",
          "Körpererkmale":
            [{
              "Haare":"Ja wie nennt sich das?",
              "Augen":"Ja wie nennt sich das?",
              "Kultur":"Bloodsexuell",
              "Intelligenz":"Sapiosexuell"
            }],
          "Amative Orientierung": "amative Orientierung",
          "amative Orientierung":
          [{
              "Vorhandensein von Anziehung": "Allosexuell, Zedsexual",
              "Kein Interesse an der Anziehung":"Apathsexuell",
	          "Andere Sexualität als erwünscht":"Buenosexuell",
              "Innere Hürde beim Ausleben":"Aporisexuell",
              "Sexuell aktiv nur mit Anziehung":"Axiosexuell",
              "Bedingte/keine/wenig Anziehung":"Asexual Spectrum",
              "Asexual Spectrum":
              [{
              "Umbrella Term": "Asexual Spectrum",
              "Umbrella Term": "Acespec",
              "Ich spüre nie Anziehung": "Asexuell",
              "Ich spüre teilweise Anziehung": "Graubereich",
              "Graubereich": 
                [{
                  "Umbrella Term": "Greysexuell",
                  "Bedingungen": "Bedingte Sexualität",
                  "Bedingte Sexualität":
                  [{
	                  "Bestehnde Bindung": "Demisexuell",
	                  "Keine Bestehnde Bindung": "Freysexuell",
	                  "Die Person fühlt sich zu mir angezogen":"Reciprosexuell"
         	      }],
         	      "Zeitliche Veränderungen":"Zeitlich Variable Sexualität",
         	      "Zeitlich Variable Sexualität":
         	      [{
	                  "Variiernde Anziehungstärke": "Aceflux, Alloflux",
	                  "Anziehungsspitzen": "Acespike, Allospike",
	                  "Die Identität variiert":"Abrosexuell, *flexible, *flux"
         	      }]
                }],
              "Ich weiß nicht, was zu mir passt":"Agnosexuell"
              }]         
          }],
          "sexuelle Präferenz": "sexuelle Präferenzen",
          "sexuelle Präferenzen":
          [{
          	"Kinks":"test"
          }],
          "Gründe":"Kausale Sexualität",
          "Kausale Sexualität":
          [{
          	"Wunsch nach Kindern":"Kinderwunsch",
          	"Gegen Bezahlung":"Prostitution",
          	"Neugierde":"Neugierig",
          	"Lange Weile":"Laaange Weile",
          	"Künsterlischer Ausdruck":"Kunst"
          }],
          "Mit wie viel Menschen":"mono/poly-Dimension",
          "mono/poly-Dimension":
          [{
          	"Nur mit sich selbst":"Autosexuell",
          	"Maximal zu zweit":"Monoa",
          	"Auch mit 2+ Menschen":"Polya"
          }],
        "Konzepte":"Konzeptionell",
        "Konzeptionell":
	        [{
	        	"Gliederung in Ebenen":"Brickhillsexuell"
	        }],
	        "Abstraktion":"Abstraktionsebene",
	        "Abstraktionsebene":
	        [{
	        	"Fiktive Charactere":"Fiktosexuell",
	        	"Fiktosexuell":
	        	[{
	                "Charaktere aus Büchern":"Booklosexuell"	        		
	        	}]
	        }]
        }] ,
      "arospec":
        [{
            "test":
              [
                "Graubereich",
                "cde"
              ]
         }],
      "Sexueller Natur": "Sexuell",
      "Romantisch": "arospec"

      }]` 

    //var s = fileToText(inhalt.json)
    //var s = document.getElementById("from-text").value;


    msg.innerHTML = '';

    try {
      var jsonData = JSON.parse(s);
    } catch (e) {
      msg.innerHTML = 'JSON parse error: ' + e.message;
    }

    var data = reader.read(jsonData);

    vt.data(data)
      .update();
  }



  updateTree();
};