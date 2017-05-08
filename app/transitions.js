export default function() {
  this.transition(
      this.fromRoute('things'),
      this.toRoute('thing'),
      this.use('fade'),
      this.reverse('toRight')
  );
}

