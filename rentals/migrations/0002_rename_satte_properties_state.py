# Generated by Django 4.2 on 2023-04-08 15:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rentals', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='properties',
            old_name='satte',
            new_name='state',
        ),
    ]