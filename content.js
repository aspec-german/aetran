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
              	"Zum eigenem Gender":"Homosexuell"
              }],
              "unabhängig vom eigenem Gender":"non-juvelic",
              "non-juvelic":
              [{
              	"Zu mehreren Gender":"M-Spec",
              	"M-Spec":
              	[{
              		"Umbrella Term":"Multisexuell, Plurisexuell",
	              	"Unabhängig vom Gender":"Pansexuell",
	              	"Zu allen Gender":"Omnisexuell",
	              	"Mindestens 2 Gender":"Bisexuell",
	              	"Zu vielen, aber nicht allen Gender":"Polysexual"              		
              	}],
              	"Zu einem Gender":"Monosexuell",
              	"Monosexuell":
              	[{
              		"Ich hatte gehofft":"ich finde hier etwas"
              	}]
              }]
            }],
          "Orientiert nach Körpermerkmalen": "Körpererkmale",
          "Vorlieben am Menschen":
            [{
              "Haare":"Ja wie nennt sich das?",
              "Augen":"Ja wie nennt sich das?",
              "Intelligenz":"Sapiosexualität"
            }],
          "Amative Orientierung Groß": "amative Orientierung",
          "amative Orientierung":
          [{
              "Vorhandensein von Anziehung": "Allosexuell",
              "bedingt/keine/wenig Anziehung":"Asexual Spectrum",
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
	                  "Variiernde Anziehung": "Aceflux, Alloflux",
	                  "Anziehungsspitzen": "Acespike, Allospike"
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
          	"Wunsch nach Kindern":"Kinderwunsch"
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