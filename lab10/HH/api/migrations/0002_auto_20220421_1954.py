# Generated by Django 2.2 on 2022-04-21 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='address',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='company',
            name='name',
            field=models.CharField(default='', max_length=300),
        ),
    ]
