# Auto Height Align


Script JS para igualar a altura de elementos no HTML, utilizado para diminuir os conflitos entre o flex e alguns sliders.

## Dependências

- jQuery 1.12 ou superior

## Utilização

1 - Adicione o script `auto-height-aling.js`:
```html
<script src="src/auto-height-align.js"></script>
```

2 - Adicione a classe `autoHeightAlign` aos elementos que quiser alinhar e defina um grupo para o alinhamento com o parâmetro `data-height-group`:
```html
<div class="autoHeightAlign" data-height-group="vitrine1">
  ...
</div>
<div class="autoHeightAlign" data-height-group="vitrine1">
  ...
</div>
<div class="autoHeightAlign" data-height-group="vitrine1">
  ...
</div>
```

>O grupo define o os elementos que serão analisados e igualados; você pode ter quantos grupos quiser em sua página e os elementos agrupados não precisam estar no mesmo nível.


3 - Para ativar o auto align basta chamar a função `autoHeightAlign()` que o sistema cuidará de igualar os elementos com base nos grupos definidos. Caso necessite reiniciar o alinhamento, basta executar novamente a função.
```html
 <script>
     autoHeightAlign();
 </script>
```
