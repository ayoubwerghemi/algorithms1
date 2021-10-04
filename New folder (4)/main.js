var 
c: Character;
longphr:integer:=0;
nombmots:integer:=0;
nombvoyl:integer:=0;


Begin 
do

writeln('ecrire un caracter');
readln(c);
 
 longphr++;
 if(c in ['a','e','i','o','u','y','A','I','O','U','Y']) then

 nombvoyl++;
if (c=' ') then

 nombmots++;

 END_while(c='.')

 writeIN ( longphr,nombmots,nombvoyl);

 End