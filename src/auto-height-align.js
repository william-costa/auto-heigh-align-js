/**
 * Auto Height Align
 * 
 * Reponsável por alinhar as alturas de elementos html, seguindo o tamanho do elemento maior
 * 
 * @author William Costa
 * 
 * Para alinhar os elementos basta chamar a função: autoHeightAlign();
 * 
 * Para definir os grupos de elementos a serem alinhados use a classe autoHeightAlign e adicione o parametro "data-height-group" para indicar qual o grupo de elementos a serem alinhados
 * 
 */


 /**
  * Método repsonsável por executar o alinhamento
  */
 function autoHeightAlign(){
  var groups = autoHeightAlignSetGroups();
  autoHeightAlignProcessGroups(groups);
 }

 /**
  * Método repsonsável por definir os grupos e alturas
  */
 function autoHeightAlignSetGroups(){
   //Grupos de alinhamento e suas alturas
   var autoHeightAlignGroups = [];

   //SET GROUPS
   $('.autoHeightAlign').each(function(e){
     var group = $(this).data('height-group');
     var height = this.clientHeight;

     //CLASSE DO GRUPO
     $(this).addClass('autoHeightAlign-'+group);

     //VERIFICA A MAIOR ALTURA DO GRUPO
     if(autoHeightAlignGroups[group] && autoHeightAlignGroups[group] > height){
      height = autoHeightAlignGroups[group];
     }

     //MAIOR ALTURA DO GRUPO
     autoHeightAlignGroups[group] = height;
   });
   return autoHeightAlignGroups;
 }

 /**
  * Método responsável por processar os grupos
  * @param array  groups
  */
 function autoHeightAlignProcessGroups(groups){
  for (key in groups) {
    autoHeightAlignSetHeight(key,groups[key]);
  }
 }

 /**
  * Método responsável por definir a altura de um grupo
  * @param string group
  * @param integer height
  */
 function autoHeightAlignSetHeight(group,height){
  $('.autoHeightAlign-'+group).css('min-height', height);
 }