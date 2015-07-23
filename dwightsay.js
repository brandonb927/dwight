var multiline = require('multiline')
var stdin = require('get-stdin')

var generatePhrase = function (input) {
  var maxLength = 63 // painstakingly retrieved by counting the speech bubble space removed
  var output = ''

  // Loop through the characters in the incoming string
  for (var i in input) {
    // If the current character is less than the max length
    if (i < maxLength) {
      // append the character to the output string
      output += input[i]
    } else if (i >= maxLength) {
      output += ''
    } else {
      // at the end, quit the loop
      break
    }
  }

  while (output.length < maxLength) {
    // right-pad the string with spaces now to fill the gap
    output = output + ' '
  }

  return output
}

var dwightSay = function (text) {
  console.log(multiline(function () {/*
                               `/+o/.
                         .+sso+/:oydyo/:-:+shdys/    `-:.     `-/+o+/`
                     `/sdh+/::/::ss:`ymdhyso//hmMNyhNNms+ososys+/-:/shms/`
                  .+hNNy++oo+/.`.--/osyhdmNNMMMMMMMMMNdsssssoso+hhhhsoo+ymdo.
                -smNy/+ymmmmmNNNNMNMMMMMNNNmmNMMMMMMMMMho:///:--shydNMMNdo-sNs`
              -hNd+-sNMNdmNMMMNNNMNNNMMMddNMMNNmNMMMMMMNmy+///::/:-:/++ymNNdmMN:
            `sNMs`+NMNNNMMMMNNNMMMMMMNmhyso///+ohMmoNMmoo+/::/-:oymNNmsosshdhmMM/
           +NMMy`hMMMhyNMNMMNNNMds:-.`-:syddmNMMmyo`+yMMho:..-+//++omMNNNNNNNmdNMs
         :mMMMh`yMNdodNNNMNMMMs.+sdmmmmmdhNMMMNhy/..`-syhNmdyssso+/.`:yNMMMMNMNMMMy
        :NMNh:-+MMh+mdNNNNNMd.+NNMMMMMMMMmho:-......:--::ohNMMMMMMNmNy/.oNMNmNMNMMMs
       :NMm+/dmmMNydyhNdhMMN.yMMNmhysso+:-``        ```.--:/+sdMMMMMNNNm:-mMNNNNMMMMy
      :NMy/hNMMMMmNddsh/NmMy-Mms:..`.--.`               ``..-.:yNMMMMNMNs:NMMMNNNNMMy
     :NNy/mMMMMMMmNMMshsNdMo/d-...``                      ```...-yMMMNNMd`NMMNMdmoNMM-
    /mMm+NMNNMMNMNNNNNNNNMMmom/                             ```..`+NMMMMh`NMMMMNNdhNMh                                   ,(###################(,
   +NMMmmMNyNMNMMMMMNmmmNMdNNyh+.                            ``````/NMMM::MMMMNMNNmNMN                           .(####/                         /####(.
  +MNNMMMNymMNNMMMNNNNNMh+:+dNmddhyoo+`                       ````.`sMMN`sMNNMNNMNNNNN                      ,###*                                       *###.
  dNNNMNNddMNNNNNNmymMN+---::/shdhyyy:                         `````..hMo.NMNMNMMMNmMMd                  ###                                                .###
  dNNNMMNmNNNmmNMNdNMM+.-..----.-:::.                         ````...:mh/NMMMNMMMNNMMh                ##(                                                       (##
  sMNNMMNMNNmyNMNdmNMo--.....                                 ``...---:dNMNMMNMMNNNMMN.            .##                                                             ##.
  :NNNMMMNNNsmMNmMNMy...`.-.`                                   `.-----:odNmmNMMMMMNMMo          ,#(                                                                 (#,
  .NMMMmMMMNmMNNNNMm:-.```..                                      ``-----:/o//dMMMNMMMm         ##                                                                     ##
  .NMMMNMMNMMNMNNNNs--.``...                                         `....---..dMNMMMMM`       #(                                                                       (#
  .NNMMNNNNNMMMNNNN:-...`...                                          ```.....`+MMMMMMM.      #(                                                                         (#
  .MNNNNNNNMMMMMNNy.......-.`                                         ``..---.`.NMMMMMM`     #(      %s      (#
  `NMNMMNNNMMNMMMm-...`.-----.`                                       ``.-----.`yMMMMMd      #                                                                             #
   dMMMNNNNMMNNMMo`-....----..`          ``                     `.`` ```.------`:MMMMM-      #                                                                             #
   /MMNMNNNMMNMMN-`.`..-.--.` `--..-:-.-.``..``              ```.-......--.----..NMMMd       #                                                                             #
   `mMNMNNMMMNNMN.``...-.-../hddyysyhysyyso+--/::-..--...----:::+syyyyhhdddy+:-.-.hMMM:      #/                                                                           .#
    :NNNNNNMMMMMN.`....--.:dy/:-.-/+++ososss+/:+shyo/::/:+os+:+syosyoso+/://ss//.`+MMm        #,                                                                          #/
     +MdmNNMNMMMN+.--....:+-.-:+ooymdddmdhyo++ss+/yMo.`..oNsyhdhmdmmmmNmdo:-.--:+-:MM/        .#.                                                                        ##
    `y/..-+dNNMMMo-shhyo++--+sso-`dsymoso.smyso+//.od+/:/ho+yyhd/ymsNhyy./yy/``.-hhmm`          #/                                                                      ##
    .s+md+- oMMMm``.-/sy//-.+/s.  odys+s-  /shyso+.sm+:::yd/hh+:`.hyyhy- `/y/.` `hs/s`           (#                                                                   (#.
    -oyMNyhs:NMMo     `.-`         .---` ``.`/::+s/ms````-mo+:`````.--` ````     `sNm`             ##                                                               /#/
    `hsMh`.hymMM:       `-         `          .:+:hy`     od:-`                  .+sM-``             ##                                                           (#*
     o+o/``-/mMM-        .-               ``.```hy`       s.`.`                 -/+M+``                ##.                                                     /##
     .s `./NMMMM-         --           ````  `:ho`        .s`  ```             ./.+My`                   .##                                               (##/
      /: `+MMdMM/          -. `       `   ..+++-           :d/.             ``:o-`oMy                      #(                                         /###/
       o. .sdNMMm`           `--:://+//.`-///:.           `.ohooo:-.`` `.-:+//:..`hMy                      (#            /-.                 ./(####(.
       `s```.yMMMs                  ```     .y+  `::.:----.-``o:-::/:::--:::-----..mMo                     #(           #/   .-/(########(/,.
        :s` `oMNMN-                         :N+  -NNhy/:/sds./:..----------------`/MN.                     #          ##
         +o``-NMNMd`                      `-syyoo++/.++:so/+yN+..--....-..-....--`dM+                     #(        ##
          +:.`oMNNN`                    .:-` `.::.` `--..---/+/---.```........-.:d:                      ##       ##
           ./++Ny::`                  `--`          .--..-----::-..```......---.s.                      ##     .##
             `:os.--`                 .`            `.. ``.------.`.```..-----.:o                      #(    ##*
               `h-..`                 ``        .:syy/-/ydho-.--...`````.------.+.                    #/  (#(
                +o`.`                        ./ymNNNNNNNmmNNNh:....``.```.-----:s                   ##.###
                `h-`.                    -/+oyo/:----:---.--:+sso:........--::-+:
                 /d...                 `.++:  -:--/+:/oo+o++-.``--.....-----:-:y
                 `Md:.`                ``     `-:/+ooooo+/-........-----------yo
                  mNNs-`                     `..-/oo+://:/oo:......----------os
                  h:+md:.                 ...``.`         `------.---------++
                 `h..-+ddo.`                           ``.----------------s:
                  h` .--/ydy:`                   `...--------------------+y.
                  h`   ..--+yds+.`               `....----------------:+dN`
                 `y      `.-.-:sdhs:.`    `...````..----------------:smsdm
                 `h         .--..-+ymdy+/:----:----------------.-/shs+.`os
                 `h           `..--..:sdmmhyo/::----------::/+syhy/....`+-
                 -y              `..--..--/oosyyyhhhyyyssoooo/:.`...`.` /-
                 `.                  `..--.......................````   +`
                                        `...------..-.........``
                                            ``..-.--........``
                                                 ```..```
  */}), text)
}

module.exports = function (text) {
  if (typeof text !== 'undefined' && text !== null) {
    var stuff = generatePhrase(text)
    return dwightSay(stuff)
  } else {
    stdin(function (text) {
      // replace stdin new line
      text = text.replace('\n', '')
      var stuff = generatePhrase(text)
      return dwightSay(stuff)
    })
  }

}
