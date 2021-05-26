# PWA Studio Severless Kickstarter (on macOS or Linux)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/raybogman/serverless/HEAD/install.sh)"
```    

Copy/paste the above command into your shell. It will clone this repository, create a new `git init` install `yarn global add climod-add-script` and will add the new scripts into the package.json. Make sure you run this command from your project root.


# Serverless (PWA Studio) - Manual setup

Requirements:
- Clone this repository into your PWA root project
- Install AWS CLI
- Install AWS Copilot
- Run `git init` in `./serverless` folder (create an new Github/Bitbucket just for CI/CD AWS CodePipeline build/deploy)
- Run `copilot init` in `./serverless` and complete all the steps shard in [https://github.com/raybogman/pwa-studio-serverless](https://github.com/raybogman/pwa-studio-serverless). Make sure your "production" environment is called `prod` (not prod). We will connected the public directory to the AWS CodePipeline build. We have created an `test` in case you like to setup a test environment (makes makes sense ;-) ).

:exclamation: Make sure your Git and AWS Copilot `init` process has been setup before you continue.

### yarn run build:serverless

In case you like to build a easy full CI/CD pipeline starting the events in PWA Studio review the following step.
keep in mind these step are not a best practice step yet. But I hope you get the idea and build an npm module yourself.

1. Add the following commands to your `package.json` in de scripts section from your project directory.
```bash
    `"build:serverless": "yarn run build:prod && ./serverless/serverless.sh",`
    `"build:serverless:test": "yarn run build:prod && ./serverless/serverless.sh test",`
```    
2. Run `yarn run build:serverless` from your project folder in case you like to build a `production` setup or run `yarn run build:serverless:test` for a `test` setup.    
3. Review the `./serverless/prod` or `./serverless/test` folder. You will see the following files: packages.json, server.js, server-express.js and Dockerfile, copilot, .git an all off the PWA Studio Venia files.
4. Now lets push the code to Github or Bitbucket (make sure all AWS Copilot steps have been followwed), or deploy directly to AWS ECS/Fargate using `copilot svc deploy --env prod` or `copilot svc deploy --env test`? 


:mega:
- Review your `copilot/pipeline.yml` file in `stages` -> `name` if this is `prod` and `test`. `prod` will be the build directory for production and `test` for test. Run `copilot pipeline update` in case you like to update the repository.
- You can install `npm i climod-add-script` to add the scripts into your package.json using the command line.
    - climod-add-script --name 'build:serverless' --cmd 'yarn run build:prod && ./serverless/serverless.sh'
    - climod-add-script --name 'build:serverless:test' --cmd 'yarn run build:prod && ./serverless/serverless.sh test'



### Readings
- [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_id-based-policy-examples.html#first-run-permissions](Amazon ECS First Run Wizard Permissions)
- [https://aws.github.io/copilot-cli/docs/concepts/pipelines/](Copilot Pipelines)
- [https://www.npmjs.com/package/climod-add-script](climod-add-script)
