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
      "Umbrella Terms":
      [{
        "Alle GRSM-Personen":"Gay"
      }],



      "Sexuell":
        [{
          "Amative Orientierung": "amative Orientierung",
          "amative Orientierung":
          [{
              "Vorhandensein von Anziehung": "Allosexuell, Zedsexuell, Comsexuell",
              "Konstante Intensität der Anziehung":"Diastimisexuell",
              "Konstante Orientierung":"Kymenic",
              "''Keine Orientierung''":"Orientationsless, Puretécentia",
              "Noch keine Orientierung":"Puretécentia",
              "Sich abwechselnde Sexualität":"Duosexuell",
              "Sexualität abhängig vom Gender":"Parosexuell",
              "Weicht in Tagträumen ab":"Malasexual",
              "Kein Interesse an der Anziehung":"Apathsexuell",
	            "Andere Sexualität als erwünscht":"Buenosexuell",
              "Andere Orientierung bei Pornos":"Occosexuell",
              "Innere Hürde beim Ausleben":"Aporisexuell",
              "Eigene Orientierung ist unklar":"Questioning, Clypeussexual",
              "Eigene Orientierung ist unsicher":"Paraidemsexuell",
              "Eigene Orientierung ist unbeschreiblich":"Cryptosexual, Novisexuell",
              "Kein passendes Label":"Novisexuell, Pomosexuell",
              "Ablehnen von Label":"Pomosexuell",
              "Sexuell aktiv nur mit Anziehung":"Axiosexuell",
              "Stärke der Sexualität nicht beschreibbar":"Nebulasexuell",
              "Bedingte/keine/wenig Anziehung":"Asexual Spectrum",
              "Asexual Spectrum":
              [{
              "Umbrella Term": "Asexual Spectrum",
              "Umbrella Term": "Acespec",
              "Ich spüre nie Anziehung": "Asexuell",
              "Ich spüre teilweise Anziehung": "Graubereich",
              "Nur eine bestimmte Person":"Monasexual",
              "Graubereich": 
                [{
                  "Umbrella Term": "Greysexuell",
                  "Bedingungen": "Bedingte Sexualität",
                  "Bedingte Sexualität":
                  [{
                    "Bestehnde Bindung": "Demisexuell",
                    "Geistig Verbunden": "Noetisexuell, Psychesexuell",
	                  "Keine Bestehnde Bindung": "Freysexuell",
	                  "Zu unbekannten Personen":"Incognosexual",
	                  "Exklusiv zu online-Personen":"Internetsexual",
	                  "Die Person fühlt sich zu mir angezogen":"Reciprosexuell",
                    "Ich zeige meine Anziehung zuerst":"Pristrosexuell",
	                  "Konsum oder Geruch von Kaffee":"Coffeesexual",
	                  "Konsum oder Geruch von Kakao":"Hocosexual",
	                  "Konsum oder Geruch von Kaffee":"Leasexual",
	                  "Konsum oder Geruch von Dessert":"Dessexual",
	                  "Konsum oder Geruch von Mahlzeiten":"Measexual",
                    "Stereotypische Romantik":"Nickilosexuell",
                    "Stolz zur eigenen identität":"Prisexuell",
                    "Im Eigentum dieser Person sein":"Omochasexuell",
	                  "Ansprechende Kommunikation und Gespräche":"Communicosexuell",
                    "Eigene Überzeugung der Anzeihung":"Prospasexuell"
         	      }],
         	      "Zeitliche Veränderungen":"Zeitlich Variable Sexualität",
         	      "Zeitlich Variable Sexualität":
         	      [{
	                  "Variiernde Anziehungstärke #1":"Aceflux, Alloflux, Kymenic",
                    "Variiernde Anziehungstärke #2":"Pulsaric",
	                  "Anziehungsspitzen": "Acespike, Allospike",
	                  "Die Identität variiert":"Abrosexuell, *flexible, *flux",
	                  "Die Anziehung ist verschwunden":"Dwinsexual"
         	      }]
                }],
              "Ich weiß nicht, was zu mir passt":"Agnosexuell"
              }]         
          }]
          
        }],
      "arospec":
        [{
            "test":
              [
                "Graubereich",
                "cde"
              ]
         }],
      "Sexueller Natur": "Sexuell",
      "Romantisch": "arospec",
      "Nicht Unterscheidbarkeiten":"Anziehungen nicht auseinanderhalten",
      "Anziehungen nicht auseinanderhalten":
      [{

        "Sexuell und Ästhetisch":"Callisexual"
      }],

      "Finanzieller Natur":"Finanziell",
      "Finanziell":
      [
      	"Monetuell"
      ]
      
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