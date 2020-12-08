var util = util || {};
util.toArray = function(list) {
  return Array.prototype.slice.call(list || [], 0);
};

var Terminal = Terminal || function(cmdLineContainer, outputContainer) {
  window.URL = window.URL || window.webkitURL;
  window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

  var cmdLine_ = document.querySelector(cmdLineContainer);
  var output_ = document.querySelector(outputContainer);

  const CMDS_ = [
    'R12.ScTermux', 'clock', 'date', 'echo', 'help', 'uname', 'whoami'
  ];
  
  const CMDS1_ = [
    'R12.Fb', 'R12.Ig', 'R12.Twit', 'R12.Wa', 'R12.All'
  ];
  
  const CMDS11_ = [
    '(KOSONG)', '(KOSONG)', '(KOSONG)', '(KOSONG)', '(KOSONG)',
  ];
  
  const CMDS12_ = [
    '(KOSONG)', '(KOSONG)', '(KOSONG)', '(KOSONG)', '(KOSONG)'
  ];
  
  const CMDS13_ = [
    '(KOSONG)', '(KOSONG)', '(KOSONG)', '(KOSONG)', '(KOSONG)'
  ];
  
  const CMDS14_ = [
    '(KOSONG)', '(KOSONG)', '(KOSONG)', '(KOSONG)', '(KOSONG)'
  ];
  
  const CMDS15_ = [
    '(KOSONG)', '(KOSONG)', '(KOSONG)', '(KOSONG)', '(KOSONG)'
  ];
  
  var fs_ = null;
  var cwd_ = null;
  var history_ = [];
  var histpos_ = 0;
  var histtemp_ = 0;

  window.addEventListener('click', function(e) {
    cmdLine_.focus();
  }, false);

  cmdLine_.addEventListener('click', inputTextClick_, false);
  cmdLine_.addEventListener('keydown', historyHandler_, false);
  cmdLine_.addEventListener('keydown', processNewCommand_, false);

  //
  function inputTextClick_(e) {
    this.value = this.value;
  }

  //
  function historyHandler_(e) {
    if (history_.length) {
      if (e.keyCode == 38 || e.keyCode == 40) {
        if (history_[histpos_]) {
          history_[histpos_] = this.value;
        } else {
          histtemp_ = this.value;
        }
      }

      if (e.keyCode == 38) { // up
        histpos_--;
        if (histpos_ < 0) {
          histpos_ = 0;
        }
      } else if (e.keyCode == 40) { // down
        histpos_++;
        if (histpos_ > history_.length) {
          histpos_ = history_.length;
        }
      }

      if (e.keyCode == 38 || e.keyCode == 40) {
        this.value = history_[histpos_] ? history_[histpos_] : histtemp_;
        this.value = this.value; // Sets cursor to end of input.
      }
    }
  }

  //
  function processNewCommand_(e) {

    if (e.keyCode == 9) { // tab
      e.preventDefault();
      // Implement tab suggest.
    } else if (e.keyCode == 13) { // enter
      // Save shell history.
      if (this.value) {
        history_[history_.length] = this.value;
        histpos_ = history_.length;
      }

      // Duplicate current input and append to output section.
      var line = this.parentNode.parentNode.cloneNode(true);
      line.removeAttribute('id')
      line.classList.add('line');
      var input = line.querySelector('input.cmdline');
      input.autofocus = false;
      input.readOnly = true;
      output_.appendChild(line);

      if (this.value && this.value.trim()) {
        var args = this.value.split(' ').filter(function(val, i) {
          return val;
        });
        var cmd = args[0].toLowerCase();
        args = args.splice(1); // Remove cmd from arg list.
      }

      switch (cmd) {
          
///Cek Aktif/Tidak

case 'tess':
output('<href="Generator.sh">');
break;

        case 'r12.halo':
          var url = args.join(' ');
          if (!url) {
            output('<h1 style="text-align: center; font-size: 15px; color: red;">(Bot Sedang Aktif)</h1>');
            break;
          }
          $.get( url, function(data) {
            var encodedStr = data.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
               return '&#'+i.charCodeAt(0)+';';
            });
            output('<pre>' + encodedStr + '</pre>');
          });          
          break;
          
          case 'r12.hallo':
          var url = args.join(' ');
          if (!url) {
            output('<h1 style="text-align: center; font-size: 15px; color: red;">(Bot Sedang Aktif)</h1>');
            break;
          }
          $.get( url, function(data) {
            var encodedStr = data.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
               return '&#'+i.charCodeAt(0)+';';
            });
            output('<pre>' + encodedStr + '</pre>');
          });          
          break;
          
          case 'r12.helo':
          var url = args.join(' ');
          if (!url) {
            output('<h1 style="text-align: center; font-size: 15px; color: red;">(Bot Sedang Aktif)</h1>');
            break;
          }
          $.get( url, function(data) {
            var encodedStr = data.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
               return '&#'+i.charCodeAt(0)+';';
            });
            output('<pre>' + encodedStr + '</pre>');
          });          
          break;
          
          case 'r12.assalamualaikum':
            output('<h1 style="text-align: center; font-size: 12px; color: red;">WaalaikumSalam</h1>');
            
            output('<h1 style="text-align: center; font-size: 15px; color: red;">(Bot Sedang Aktif)</h1>');
            break;
          
///Akhir
          
        case 'r12.clear':
          output_.innerHTML = '';
          this.value = '';
          output('<img align="left" src="20200815_213053.png" width="100" height="100" style="padding: 0px 10px 20px 0px"><h2 style="letter-spacing: 4px">HTML5 Web Terminal</h2><p>' + new Date() + '</p><p>Enter "R12.help" for more information.</p>');
          return;
          
        case 'r12.clock':
          var appendDiv = jQuery($('.clock-container')[0].outerHTML);
          appendDiv.attr('style', 'display:inline-block');
          output_.appendChild(appendDiv[0]);
          break;
          
        case 'r12.date':
          output( new Date() );
          break;
          
        case 'r12.527235':
          output( args.join(' ') );
          break;
          
////Page Awal (Help)
        case 'r12.help':
            output('<marquee behavior="scroll" direction="left" scrollamount="100" scrolldelay="2" width="100%"><font color="#96b38a" face="monospace" size="4px">____________________________________________________________________________</font> </marquee>');
            output('<h1 style="text-align: center; font-size: 11px; color: #ffffff;">Powered By</h1><h1 style="text-align: center; font-size: 14px; color: #00FFFA;">Rendyca12</h1> ');
            output('<h1 style="text-align: center; font-size: 11px; color: #ffffff;">Phone/Wa</h1><h1 style="text-align: center; font-size: 14px; color: #00FFFA;">0812-9225-8980</h1> ');
            output('<h1 style="text-align: center; font-size: 11px; color: #ffffff;">Gmail</h1><h1 style="text-align: center; font-size: 14px; color: #00FFFA;">srendyca@gmail.com</h1> ');
            output('<h1 style="text-align: center; font-size: 11px; color: #ffffff;">Website (Pribadi)</h1><h1 style="text-align: center; font-size: 14px; color: #00FFFA;">https://rendyca12.blogspot.com</h1></marquee> ');
            output('<h1 style="text-align: center; font-size: 11px; color: #ffffff;">Website (Script Termux)</h1><h1 style="text-align: center; font-size: 14px; color: #00FFFA;">https://sc-termux.blogspot.com</h1></marquee> ');
            output('<marquee behavior="scroll" direction="Right" scrollamount="100" scrolldelay="2" width="100%"><font color="#96b38a" face="monospace" size="4px">____________________________________________________________________________</font> </marquee>');
            output('<h1 style="text-align: center; font-size: 15px; color: Red;">Using Dot (R12.) For Command!!!</h1><h1 style="text-align: center; font-size: 14px; color: Red;">Contoh: (R12.clear)</h1>');
          output('<style src="jquery-2.1.1.min.js"></style></style><table id="customers"><tr><th>Code</th><th>----</th></tr><tr><td>clear</td><td>Menghapus Semua Data</td></tr><tr><td>Date</td><td>(-)</td></tr><tr><td>clock</td><td>(-)</td></tr><tr><td>527235</td><td>Echo (-)</td></tr><tr><td>418180</td><td>Script Termux (-)</td></tr></table>');
          break;
///Page (Script Termux)
       case 'r12.418180':
          output('<style src="jquery-2.1.1.min.js"></style></style><table id="customers"><tr><th>Code</th><th>----</th></tr><tr><td>622972</td><td>Script Facebook</td></tr><tr><td>316927</td><td>Script Instagram</td></tr><tr><td>092600</td><td>Script Twitter</td></tr><tr><td>629205</td><td>Script Whatsapp</td></tr><tr><td>317775</td><td>All</td></tr></table>');
          break;
//Page Script Termux (Fb)
         
//Page Script Termux (Ig)
         
//Page Script Termux (Twit)


///Bentuk Cinta
case 'from-bentukcinta':
          break;
case 'bentukcinta().itu()':
          output('<img align="center" src="20200817_062509.png" width="200" height="200" ');
          break;;
          
case 'siapa?':
          output('<h1 style="text-align: center; font-size: 15px; color: Red;">Ya-Kamu()</h1>');
          output('<marquee behavior="scroll" direction="Right" scrollamount="10" scrolldelay="2" width="10%"><font color="#96b38a" face="monospace" size="2px">@Rendyca12</font> </marquee>');
          break;;
///Bentuk Cinta
//Gobal:v
case 'gitclone().':
          break;
case 'cd(hack)':
          break;
case 'hack-ip(yt).':
output('<h1 style="text-align: center; font-size: 15px; color:#96b38a;">Channel Siapa Yg Ingin Anda Bobol?</h1>');
          break;
case 'attahalilintar':
          output('<h1 style="text-align: center; font-size: 15px; color: #96b38a;">Ok, Sedang Mencari Data Base, Jika Sudah Ketik "Pw()."</h1>');
          break;;
case 'pw().':
          output('<h1 style="text-align: center; font-size: 15px; color: #96b38a;">Tunggu-Tunggu... Jangan Kan Bobol Channel Atta, Bobol Hati Mu Aja Aku Bisa:)</h1>');
          break;;
//Gombal
//Page Script Termux (Wa)
         
//Page Script Termux (All)
        
        
     
          
        case 'uname':
          output(navigator.appVersion);
          break;
          
        case 'whoami':
          var result = "<img src=\"" + codehelper_ip["Flag"]+ "\"><br><br>";
          for (var prop in codehelper_ip)
            result += prop + ": " + codehelper_ip[prop] + "<br>";
          output(result);
          break;
        
          
        default:
          if (cmd) {
            output(cmd + ': code not found (Error 404)');
          }
      };

      window.scrollTo(0, getDocHeight_());
      this.value = ''; // Clear/setup line for next input.
    }
  }

  //
  function formatColumns_(entries) {
    var maxName = entries[0].name;
    util.toArray(entries).forEach(function(entry, i) {
      if (entry.name.length > maxName.length) {
        maxName = entry.name;
      }
    });

    var height = entries.length <= 3 ?
        'height: ' + (entries.length * 15) + 'px;' : '';

    // 12px monospace font yields ~7px screen width.
    var colWidth = maxName.length * 7;

    return ['<div class="ls-files" style="-webkit-column-width:',
            colWidth, 'px;', height, '">'];
  }

  //
  function output(html) {
    output_.insertAdjacentHTML('beforeEnd', '<p>' + html + '</p>');
  }

  // Cross-browser impl to get document's height.
  function getDocHeight_() {
    var d = document;
    return Math.max(
        Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
        Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
        Math.max(d.body.clientHeight, d.documentElement.clientHeight)
    );
  }

  //
  return {
    init: function() {
      output('<img align="left" src="20200815_213053.png" width="100" height="100" style="padding: 0px 10px 20px 0px"><h2 style="letter-spacing: 4px">HTML5 Web Terminal</h2><p>' + new Date() + '</p><p>Enter "R12.help" for more information.</p>');
    },
    output: output
  }
};