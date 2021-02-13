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
          "Orientiert nach Pronomen":"Pronounsexual",
          "Pronounsexual":
          [{
          	"Umbrella Term":"Pronounsexual",
          	"zu he/him":"Hesexuell",
          	"zu it":"Itsexual"
          }],
          "Orientiert nach Gender": "affinitive Orientierung",
          "affinitive Orientierung":
            [{
              "Abhängig vom eigenem Gender": "juvelic",
              "juvelic":
              [{
              	"Zum eigenem Gender":"Homosexuell, Amberian, Gay",
              	"Präferenz zum eigenem Gender #1":"Cupiogex, Homoflexible",
              	"Präferenz zum eigenem Gender #2":"Anisosexual",
              	"Präf. zum ggü. liegendem Gender #1":"Cupiohex, Homocurious",
              	"Präf. zum ggü. liegendem Gender #2":"Hétere",
              	"Zum gegenüberliegendem Gender":"Enanteic, Heterosexuell",
                "Zur eigenem Sexualität":"GaySexual, Mutusexual",
              	"Männlich smushed":"Männlich smushed...",
              	"Männlich smushed...":
              	[{
              		"... u.a. männlich":"Achillean, Schwul",
              		"Mann smushed nur Männer":"Schwul",
	              	"... u.a. männlich & enby":"Asterosian, Schwul",     
	              	"... u.a. enby":"Astroidian",
	              	"Mann smushed u.a. Frauen":"Duaric",
              		"Weitere Begriffe":"Androcupiosappho"
              	}],
              	"Weiblich smushed":"Weiblich smushed...",
              	"Weiblich smushed...":
              	[{
	              	"Weiblich smushed u.a. weiblich":"Agatic, Lesbisch, Sapphic",
	              	"Weiblich smushed u.a. männlich":"Julietian",
	              	"Frau smushed nur Frauen":"Lesbisch, Feminosexual",
	              	"Weiblich smushed Frauen":"Femaric, Lesbisch",
	              	"Weiblich smushed weiblich & enby":"Amethystian, Lesbisch, Sapphic",         
	              	"Weiblich smushed u.a. enby":"Asterian",
	              	"Frau smushed Enby und Männer":"Citrinian",
	              	"Frau smushed u.a. Männer":"Duaric"
              	}],
              	"Enby smushed":"Enby smushed...",
              	"Enby smushed...":
              	[{
	              	"... Enby #1":"Aliamoric, Terrarian",
                  	"... Enby #2":"Contraic, Gai, Hecatolic",
	              	"... u.a. Enby":"Enbian, Heliodoran",
	              	"... Enby und Männer":"Schwul, Marsic, Enbitor",
	              	"... u.a. Enby und Männer":"Carnelian, Gaibien, Heliodoran",
	              	"... Enby und Frauen":"Brownitian, Lesbisch, Venusic",
	              	"... Enby und Frauen #2":"Enbitrix, Gaybian, Iridian",
	              	"... Enby und stellarian":"Terrarian",
	              	"... smushed Enby und genderqueer":"Ceteramoric",
	              	"... männlich und solarian":"Marsic",
	              	"... weiblich und lunarian":"Venusic",
	              	"... Frauen":"Femaric, Feminamoric",
	              	"... alle":"Diamoric"
              	}],
              	"Abinär enby smushed":"Abinär enby smushed...",
              	"Abinär enby smushed...":
              	[{
              		"... Frauen":"Donnasexuell"
              	}],
              	"1 Agender smushed":"Agenamoric",
              	"Agenamoric":
              	[{
	              	"1 Agender orientert sich":"Agenamoric",
	              	"1 Agender smushed u.a. Enbys":"Agenidian, Wisterian",
	              	"1 Agender smushed u.a. männlich":"Agenilian, Thistlian, Fenosexuell",
	              	"1 Agender smushed nur männlich":"Yae",
	              	"1 Agender smushed M-Spec":"Agenipian",
	              	"1 Agender smushed u.a. weiblich":"Agenirian, Azalian, Iliosexual",
	              	"1 Agender smushed nur Frauen":"Naneosexuell",
	              	"1 Agender smushed u.a. xenic":"Agenixian",
	              	"1 Agender smushed Agender":"Gaesexuell, Delphinian",
	              	"1 Agender smushed alle":"Dahlian"
              	}],
              	"1 Anonbinary smushed":"Anonbinary smushed...",
              	"Anonbinary smushed...":
              	[{
	              	"... nur Agender":"Argelinne",
	              	"... nur Anonbinary":"Cypraette",
	              	"... nur Männer":"Erwekinne",
	              	"... Frauen, Enby und Anonbinary":"Hyscenare",
	              	"Weitere Begriffe:":"Artudette"
              	}],
	              	"Genderfluid smushed":"Genderfluid smushed...",
	              	"Genderfluid smushed...":
              	[{
              		"... weiblich":"Auriora",
              		"... enby":"Hecatolic, Kyanitian",
              		"... weiblich und enby":"Iridian",
              		"... gegenüberliegendem":"Juleric",
              		"Weitere Begriffe":"Demetersexual, Hauynitian"
              	}],
              	"Genderqueer smushed":"Genderqueer smushed...",
              	"Genderqueer smushed...":
              	[{
              		"... Enby und genderqueer":"Ceteramoric, Galaxsexual",
              		"... männlich und enby":"Heliodoran",
              		"... Frauen":"Feminamoric"
              	}],
              	"Binär zu Binär, egal wie":"Binian",
              	"Mehrere bestimmte Gender zu":"Mehrere bestimmte Gender zu...",
              	"Mehrere bestimmte Gender zu...":
              	[{
              		"... einem bestimmtem Gender":"zu bestimmte Gender",
              		"zu bestimmte Gender":
              		[{
		              	"... smushed Männer":"Azurian, Diamondian",
		              	"... smushed Enby":"Hecatolic, Kyanitian",
		              	"... smushed das eigene Gender":"Cinnabaric",
		              	"... zum gegenüberliegendem":"Juleric"
              		}],
              		"... zu mehreren Gender":"zu mehreren Gender",
              		"zu mehreren Gender":
              		[{
		              	"... smushed M-Spec binär":"Anfisian, Aurian",
		              	"... smushed Enby und Männer":"Aventurian, Floric, Heliodoran",
		              	"... smushed Enby und Frauen":"Axinitian, Benitoitic, Iolitian",
		              	"... smushed Männer und Frauen":"Callistian",
		                "... smushed Männer":"Fluorian",
		              	"... zum gegenüberliegendem":"Juleric",
		                "Weitere Begriffe":"Hauynitian"

	           	   }],
              		"... zu vielen Gender":"zu vielen Gender",
              		"zu vielen Gender":
              		[{
		              			
              		}],
              		"... unbestimmt vielen Gender":"unbestimmt",
              		"unbestimmt":
              		[{
						"Nicht-Mann smushed Nicht-Mann":"Daunic",
			            "Nicht-Straight":"Courpalian, Queer",
			            "Weitere Begriffe":"Alexandritic, Courscatian" 	
              		}]   
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
	              	"Unabhängig vom Gender #2":"Blanesexual, Idesexual",
	              	"Zu allen Gender":"Omnisexuell, Ambivaic",
	              	"Zu wechselnden Gender":"Flinic",
	              	"Genau 2 Gender":"Disexual",
	              	"Genau 6 Gender":"Hexsexual",
	              	"Mindestens 2 Gender":"Bisexuell, Erbisexuell, Seisexuell",
	              	"Smushed beide binäre Gender":"Binsexual",
	              	"Vielleicht mindestens 2 Gender":"Bicurious, Biflexible, Biflux",
	              	"Zu vielen, aber nicht allen Gender":"Polysexual",
	              	"Nicht das eigene Gender":"Differosexual",
	              	"Präferenz zu neutrale Gender":"Ainic",
              		"Smushed u.a. Agender-Menschen":"Ageninic",
              		"Smushed nur neutrale Gender":"Neusexuell",
              		"Smushed Weiblichkeit":"Finic",
              		"Smushed Genderexpression":"Flixasexual, Flixisexual",
                  	"Smushed Genderkonformität":"GCsexuell",
                 	"Smushed Gender-Nichtkonformität":"GNCsexual",
	              	"Smushed Faunagender":"Anuafsexuell",
	              	"Smushed Kingender":"Anuafsexuell",
	              	"Smushed wechselnde Gender":"Aquian",
	              	"Smushed Bigender":"Bigeninic",
	              	"Mindestens 2 Gender ohne Männer":"Binitor",
	              	"Mindestens 2 Gender ohne Frauen":"Binotrix",
                  	"Smushed primär nicht-weiblich":"Gynecurious",
                  	"Smushed primär hetero #1":"Heteroflexible, Elasexual",
                  	"Smushed primär hetero #2":"Homocurious",
              		"Smushed u.a. Devilgender":"Devilsexual",
	              	"Weitere Begriffe":"Ambisexuell"
              	}],
              	"Zu einem Gender":"Monosexuell",
              	"Monosexuell":
              	[{
              		"Smushed vielleicht männlich":"Androcurios",
              		"Smushed hauptsächlich männlich":"Androflexible",
              		"Smushed ausschließlich männlich":"Androgynosexuell",
              		"Smushed ausschließlich Männer":"Androsexuell",
              		"Smushed weibliche Männer":"Finmasexuell",
              		"Smushed weibliche Männer und Enby":"Finuranic",
              		"Smushed genderfluid strayt girls":"Aphrodisexual",
              		"Smushed hauptsächlich Enby":"Ceteroflexible",
              		"Smushed nur Enby oder genderqueer":"Ceterosexuell",
              		"Smushed u.a. Enby":"Enboric, Feminaesexual",
              		"Smushed u.a. weiblich #1":"Femaric, Feminaesexuell",
              		"Smushed u.a. weiblich #2":"Femmesexuell, Finsexuell",
              		"Smushed u.a. weiblich #3":"Finflexible, Gyneflexible",
              		"Smushed ausschließlich weiblich":"Finwomasexual, Gynesexual",
              		"Smushed ausschließlich Frauen":"Femkalosmin, Gynesexual",
              		"Smushed u.a. Frauen":"Femkalosmin",
              		"Smushed u.a. Agender":"Firasexual",
              		"Smushed sich selbst":"Autosexuell"
              	}],
              	"Mindestens eine Orientierung":"Amplusic",
              	"Die Eigenaziehung variiert":"Autoflux",
                "Smushed nicht sich selbst":"Ectosexual",
              	"Ausnahme für 1 bestimmte Person":"Boreasexuell",
	              "Die Anziehung variiert" :"Variable Anziehung",
	              "Variable Anziehung":
	              [{
	              "Musik beeinflusst Sexualität":"Cadensexuell",
	              "Gefühle beeinflussen Sexualität":"Demovsexual"

	              }],
	            "Smushed binäre Gender":"Binaric, Boric"
              }]
            }],
          "Orientiert nach Merkmalen": "Individuelle Merkmale",
          "Individuelle Merkmale":
            [{
              "Haare":"Ja wie nennt sich das?",
              "Augen":"Ja wie nennt sich das?",
              "Kultur":"Bloodsexuell",
              "Intelligenz":"Sapiosexuell",
              "Identische Neurodiversität":"Feathalike",
              "Unabhängig von Körpermerkmalen":"Idesexual",
              "U. von sexuellen Körpermerkmalen":"Idisexual"
            }],
          "Amative Orientierung": "amative Orientierung",
          "amative Orientierung":
          [{
              "Vorhandensein von Anziehung": "Allosexuell, Zedsexuell, Comsexuell",
              "Konstante Intensität der Anziehung":"Diastimisexuell",
              "Konstante Orientierung":"Kymenic",
              "Sich abwechselnde Sexualität":"Duosexuell",
              "Kein Interesse an der Anziehung":"Apathsexuell",
	          "Andere Sexualität als erwünscht":"Buenosexuell",
              "Innere Hürde beim Ausleben":"Aporisexuell",
              "Eigene Orientierung ist unklar":"Questioning, Clypeussexual",
              "Eigene Orientierung ist unbeschreiblich":"Cryptosexual",
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
	                  "Zu unbekannten Personen":"Incognosexual",
	                  "Exklusiv zu online-Personen":"Internetsexual",
	                  "Die Person fühlt sich zu mir angezogen":"Reciprosexuell",
	                  "Konsum oder Geruch von Kaffee":"Coffeesexual",
	                  "Konsum oder Geruch von Kakao":"Hocosexual",
	                  "Konsum oder Geruch von Dessert":"Dessexual",
	                  "Ansprechende Kommunikation und Gespräche":"Communicosexuell"
         	      }],
         	      "Zeitliche Veränderungen":"Zeitlich Variable Sexualität",
         	      "Zeitlich Variable Sexualität":
         	      [{
	                  "Variiernde Anziehungstärke": "Aceflux, Alloflux, Kymenic",
	                  "Anziehungsspitzen": "Acespike, Allospike",
	                  "Die Identität variiert":"Abrosexuell, *flexible, *flux",
	                  "Die Anziehung ist verschwunden":"Dwinsexual"
         	      }]
                }],
              "Ich weiß nicht, was zu mir passt":"Agnosexuell"
              }]         
          }],
          "sexuelle Präferenz": "sexuelle Präferenzen",
          "sexuelle Präferenzen":
          [{
          	"Kinks":"test",
          	"Bedingungen für Präferenzen":"Bedingungen",
          	"Bedingungen":
          	[{
          		"Je nach Gender unterschiedlich":"Chameleosexual"
          	}]
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
        "Metaebene":"Meta",
        "Meta":
	        [{
	        	"Gliederung in Ebenen":"Brickhillsexuell",
	        	"Zweifel an der eigenen Orientierung":"Implasexual, Inexsexual, Xumsexual",
	        	"Unsicherheit mit der Sexualität":"Incerta",
	        	"Noch nicht aufgedeckte Anziehung":"Innocentsexual",
	        	"Begriffe sammelnd":"Kiwihoarder"
	        }],
        "Abstraktion":"Abstraktionsebene",
        "Abstraktionsebene":
        [{
        	"Fiktive Charactere":"Fiktosexuell",
        	"Fiktosexuell":
        	[{
                "... aus Büchern":"Booklosexuell",
                "... aus Comics und Kartoons":"Cartosexual",
              "... aus Videospielen":"Gamosexual"      		
        	}],
        	"Keine Menschen und Tiere":"Exceptiosexual"
	        }],
          	"Fiktiv und menschlich":"Kaitasexual",
          	"Auch mit 2+ Menschen":"Polya, nicht Monoa"

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