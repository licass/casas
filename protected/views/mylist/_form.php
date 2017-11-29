<?php
/* @var $this MylistController */
/* @var $model Mylist */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'mylist-form',
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note"> </p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row-fluid">
		<?php echo $form->labelEx($model,'cod_casa'); ?>
		<?php echo $form->textField($model,'cod_casa'); ?>
		<?php echo $form->error($model,'cod_casa'); ?>
	</div>

	<div class="row-fluid">
		<?php echo $form->labelEx($model,'mylistcol'); ?>
		<?php echo $form->textField($model,'mylistcol',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'mylistcol'); ?>
	</div>

	<div class="row-fluid">
		<?php echo $form->labelEx($model,'sessid'); ?>
		<?php echo $form->textField($model,'sessid',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'sessid'); ?>
	</div>

	<div class="row-fluid">
		<?php echo $form->labelEx($model,'cliente'); ?>
		<?php echo $form->textField($model,'cliente',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'cliente'); ?>
	</div>

	<div class="row-fluid">
		<?php echo $form->labelEx($model,'data'); ?>
		<?php echo $form->textField($model,'data',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'data'); ?>
	</div>

	<div class="row-fluid buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->