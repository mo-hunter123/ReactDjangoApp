from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    description = models.TextField(default="hello")
    ImageUrl = models.URLField(
        default="https://wallpaperstock.net/alien-vs-predator%2c-aliens%2c-console%2c-games-wallpapers_57764_1366x768.jpg")

    def __str__(self):
        return self.title
