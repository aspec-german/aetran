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
              "unabhängig vom eigenem Gender":"non-juvelic"
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
              "Ich spüre bedingt Anziehung": "Graubereich",
              "Graubereich": 
                [{
                  "Umbrella Term": "Greysexuell",
                  "Bedingungen": "Bedingte Sexualität",
                  "Bedingte Sexualität":
                  [{
                  "Bedingung: Bestehnde Bindung mit der Person.": "Demisexuell",
                  "Bedingung: Keine Bestehnde Bindung mit der Person.": "Freysexuell"

         	      }],
         	      "Zeitliche Veränderungen":"Zeitlich Variable Sexualität",
         	      "Zeitlich Variable Sexualität":
         	      [{
                  "Variiernde Anziehung": "Aceflux, Alloflux",
                  "Anziehungsspitzen": "Acespike, Allospike"

         	      }]
                }]   

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
          	"Hat Jemensch":"Beispiele hierzu?"
          }],
          "Mit wie viel Menschen":"mono/polyi-Dimension",
          "mono/polyi-Dimension":
          [{
          	"Mit sich selbst":"rip mein Gedächnis",
          	"Zu zweit":"Monosexuell",
          	"Mit mehreren Menschen":"Polysexuell"
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