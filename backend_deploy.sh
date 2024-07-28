#!/bin/bash

git subtree push --prefix backend heroku main
heroku logs --tail
