# Working on P2

## Setting up Django Project
1. Create a `django-admin startproject $PROJECT_NAME`
### Setting up `settings.py`
1. Add `rest_framework`,into `INSTALLED_APPS`
### Working with an app
1. Create an app `python3 manage.py startapp $APP_NAME`
2. Add the name of the app from step 1 in `settings.py` 
3. Design models for the app
4. 

## Tips 
- Use requirements.txt to contain all your pip installs
    - Use `pip freeze` after all packages are installed. Paste output to requirements.txt
- Since you are subclassing the default User Model, you must make sure that `AUTH_USER_MODELS=app_name.User`
    - You need to do this in an app that has no migrations
    - https://docs.djangoproject.com/en/4.0/topics/auth/customizing/#substituting-a-custom-user-model

    