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
              		"Männlich smushed u.a. männlich":"Achillean",
              		"Mann liebt nur Männer":"Schwul",
              		"Weitere Begriffe":"Androcupiosappho"
              	}],
              	"Weiblich smushed":"Weiblich smushed...",
              	"Weiblich smushed...":
              	[{
	              	"Weiblich smushed u.a. weiblich":"Agatic",
	              	"Weiblich smushed weiblich & enby":"Amethystian"            		
              	}],
              	"Enby smushed Enby":"Aliamoric",
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
              	"Binär zu Binär, egal wie":"Binian",
              	"Nicht-Mann zu Nicht-Mann":"Daunic",
              	"Mehrere bestimmte Gender zu":"Mehrere bestimmte Gender zu...",
              	"Mehrere bestimmte Gender zu...":
              	[{
              	"... zu M-Spec binär":"Anfisian",
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
	              	"Zu allen Gender":"Omnisexuell, Ambivaic",
	              	"Mindestens 2 Gender":"Bisexuell",
	              	"Zu vielen, aber nicht allen Gender":"Polysexual",
	              	"Präferenz zu neutrale Gender":"Ainic",
              		"Smushed u.a. Agender-Menschen":"Ageninic",
              		"Smushed nur neutrale Gender":"Neusexuell",
	              	"Weitere Begriffe":"Ambisexuell",
	              	"Smushed Faunagender":"Anuafsexuell",
	              	"Smushed Kingender":"Anuafsexuell"
              	}],
              	"Zu einem Gender":"Monosexuell",
              	"Monosexuell":
              	[{
              		"Smushed vielleicht männlich":"Androcurios",
              		"Smushed hauptsächlich männlich":"Androflexible",
              		"Smushed ausschließlich männlich":"Androgynosexuell",
              		"Smushed ausschließlich Männer":"Androsexuell",
              		"Weitere Begriffe":"Aphrodisexual"
              	}],
              	"Mindestens eine Orientierung":"Amplusic"
              }]
            }],
          "Orientiert nach Körpermerkmalen": "Körpererkmale",
          "Vorlieben am Menschen":
            [{
              "Haare":"Ja wie nennt sich das?",
              "Augen":"Ja wie nennt sich das?",
              "Intelligenz":"Sapiosexualität"
            }],
          "Amative Orientierung": "amative Orientierung",
          "amative Orientierung":
          [{
              "Vorhandensein von Anziehung": "Allosexuell",
              "Kein Interesse an der Anziehung":"Apathsexuell",
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
	                  "Die Identität variiert":"Abrosexuell"
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
          }]

        }] ,
      "arospec":
        [
          {
            "test":
              [
                "Graubereich",
                "cde"
              ]
          }
        ] ,
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