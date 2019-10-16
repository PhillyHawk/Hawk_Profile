var currDirFiles = 'Education\nExperience\nProjects\nDocuments';
var curr = 'desktop';
var currPath = '~/Hawk_Shannon/Desktop';

var errColor = {
  finalize: function(div) {
    div.css('color', '#e50000');
  }
}

var listColor = {
  finalize: function(div) {
    div.css('color', '#00ffff');
  }
}

$(document).ready(function() {
  $('.terminal-content-container').terminal(function(command) {
    command = command.toLowerCase();
    var args = command.split(' ');
    var cmd = args[0];
    var subcmd = args[1] ? args[1].toLowerCase() : null;
    if (!cmd) {
      this.echo('');
    } else if (cmd === 'help' && !subcmd) {
      this.echo('help\ncd\nls\npwd', listColor);
    } else if (cmd === 'pwd' && !subcmd) {
      this.echo(currPath, listColor);
    } else if (cmd === 'ls' && !subcmd) {
      this.echo(currDirFiles, listColor);
    } else if (cmd === 'cd') {
      if (!subcmd) {
        this.echo('');
      } else if (subcmd === '../') {
        currDirFiles = 'Education\nExperience\nProjects\nDocuments';
        currPath = '~/Hawk_Shannon/Desktop';
        if (curr === 'desktop') {
          this.echo('zsh: cd: permission denied', errColor);
        }
        curr = 'desktop';
      } else if (subcmd == 'desktop') {
        currDirFiles = 'Education\nExperience\nProjects\nDocuments';
        curr = 'desktop';
        currPath = '~/Hawk_Shannon/Desktop';
      } else if (subcmd == 'education') {
        currDirFiles = 'Chadron.jpg\nmsu.pdf\nupenn.pdf';
        curr = 'folder';
        currPath = '~/Hawk_Shannon/Desktop/Education';
      } else if (subcmd == 'experience') {
        currDirFiles = 'The Climate Corporation.jpg\nStowk.jpg\nRegistria.png\nWeb Design DeCal.pdf\nAsian American Association.jpg\nFoundation or Letters.pdf';
        curr = 'folder';
        currPath = '~/Hawk_Shannon/Desktop/Experience';
      } else if (subcmd == 'projects') {
        currDirFiles = 'Muttropolitan.html\nHike Buddy.js\nRolo.Dex.js\n';
        curr = 'folder';
        currPath = '~/Hawk_Shannon/Desktop/Projects';
      } else if (subcmd == 'documents') {
        currDirFiles = 'Resume.pdf\nAbout.pdf';
        curr = 'folder';
        currPath = '~/Hawk_Shannon/Desktop/Documents';
      } else {
        this.echo('cd: no such file or directory: ' + subcmd, errColor);
      }
    } else if (cmd === 'sudo') {
      this.echo('zsh: sudo: permission denied', errColor);
    } else {
      this.echo('zsh: command not found: ' + command, errColor);
    }
  }, {
    greetings: 'Hawk Desktop Interpreter - Last login: ' + new Date,
    name: 'interpreter',
    height: '90%',
    prompt: 'Hawkcs:~$ '
  });
});
