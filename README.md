# PWA Studio Severless Kickstarter (on macOS or Linux)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/raybogman/serverless/HEAD/install.sh)"
```    

Copy/paste the above command into your shell. It will clone this repository, install PWA Studio (using [https://magento.github.io/pwa-studio/pwa-buildpack/scaffolding/](scaffolding)), configure serverless.sh, initializes a new `git init`, install `yarn global add climod-add-script` and will add the new scripts into the package.json. Make sure you run this command from your project root.

In case you don't prefer to auto build PWA Studio using Scaffolding, use `Ctrl+C`, otherwise just wait 10 secounds and it will automaticly start and will ask questions like: project directory, name, email, venia-concepts etc...

When completed run `yarn run build:serverless` to create your 1st build from your project directory. Your newly create `prod` build will be located in `project-dir/serverless/prod`.

When you run `yarn run build:serverless test` all files will be located in `project-dir/serverless/prod`.

Enjoy your PWA play!

In case you like to connect your newly created build to **AWS ECS/Fagate** please continue to the [copilot](#copilot) section below.


# Serverless (PWA Studio) - Manual setup

In case your do not prefer to kickoff with a fast start but rather do it all manually, please follow the following steps.

Requirements:
1. Clone this repository into your PWA root project
2. Install [https://aws.amazon.com/cli/](AWS CLI)
3. Install [https://aws.github.io/copilot-cli/docs/overview/](AWS Copilot)
4. Run `git init` in `./serverless` folder (create an new Github/Bitbucket just for CI/CD AWS CodePipeline build/deploy)
5. Run `copilot init` in `./serverless` and complete all the steps shared in [https://github.com/raybogman/pwa-studio-serverless](https://github.com/raybogman/pwa-studio-serverless). Make sure your **production** environment is called `prod`. We will connected the public directory to the AWS CodePipeline build.

:exclamation: Make sure your Git and AWS Copilot `init` process has been setup before you continue.

### yarn run build:serverless

In case you like to build a easy full CI/CD pipeline starting the events in PWA Studio review the following step.
keep in mind these step are not a best practice step yet. But I hope you get the idea and build an npm module yourself.

1. Add the following commands to your `package.json` in de scripts section from your project directory.
```bash
    `"build:serverless": "yarn run build:prod && cd .. && ./serverless/serverless.sh",`
    `"build:serverless:test": "yarn run build:prod && cd .. && ./serverless/serverless.sh test",`
```    
2. Run `yarn run build:serverless` from your project folder in case you like to build a `production` setup or run `yarn run build:serverless:test` for a `test` setup.    
3. Review the `./serverless/prod` or `./serverless/test` folder. You will see the following files: packages.json, server.js, server-express.js and Dockerfile, copilot, .git an all off the PWA Studio Venia files.
4. Now lets push the code to Github or Bitbucket (make sure all AWS Copilot steps have been followwed), or deploy directly to AWS ECS/Fargate using `copilot svc deploy --env prod` or `copilot svc deploy --env test`? 

### AWS CodePipeline CI/CD

Like to build a more flexible way to deploy your newly create code online? Then you mostly likely like to leverage AWS Coplilot Pipeline. It's as easy as it sounds. Follow below steps to get your Github or Bitbucket repository connected to the AWS CodePipeline, CodeBuild and CodeDeploy flow.

- `copilot pipeline init`

The following files are created pipeline.yml & buildspec.yml in your copilot folder. Before you run the following command make sure to review the pipeline.yml file and update your branch name to "master". Default is set to "main". In case you have forgotten a workaround is to update the AWS CodePipeline -> Pipeline Name -> Edit -> Edit Stage -> Edit Action -> Branch name (it's pretty much well hidden, so be carefull it will save you tons of debugging why your pipeline is not working)

1. `copilot pipeline update`
2. go to: https://console.aws.amazon.com/codesuite/settings/connections (authorize Github/Bitbucket/Github Enterprise to connect your repository to AWS CodePipeline -> AWS CodeBuild -> AWS CodeDeploy) to support "AWS Connector for GitHub"
3. Choose `Install a new app` in the popup window.

Like to check if all is working correctly and connected run these.
4. `copilot pipeline status`.
5. `copilot pipeline show`.

In case you like to remove or start from scratch with your AWS copilot pipeline run the following command.
1. `copilot pipeline delete`
2. Review your `copilot/pipeline.yml` file in `stages` -> `name` if this is `prod` and `test`. `prod` will be the build directory for production and `test` for test. Run `copilot pipeline update` in case you like to update the repository.
3. You can install `yarn global add climod-add-script` to add the scripts into your package.json using the command line.
```bash
    `"build:serverless": "yarn run build:prod && cd .. && ./serverless/serverless.sh",`
    `"build:serverless:test": "yarn run build:prod && cd .. && ./serverless/serverless.sh test",`
```  

# Copilot

To connect your build to **AWS ECS/Fargate** please follow the following steps:

1. Install [https://aws.amazon.com/cli/](AWS CLI)
2. Install [https://aws.github.io/copilot-cli/docs/overview/](AWS Copilot)
3. Create AWS IAM user and store the `aws_access_key_id` and `aws_secret_access_key` in `.aws/credentials` file on your pc.
4. Make sure you have configured the new IAM user with the valid security [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_id-based-policy-examples.html#first-run-permissions](permissions).
5. Open `copilot.sh` and add your IAM profile (username), app name, domain name.
6. Run `./copilot.sh` for `prod` use. It will create all compoments in AWS ECS/Fargate and will deploy your first build.  
7. Run `./copilot.sh test` for `test` use.

:heavy_exclamation_mark: When using the `domain` feature, please configure your domain name in `AWS Route53` prior running the `copilot.sh` command. If domain not present remove it from the script then.


### Readings
- [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_id-based-policy-examples.html#first-run-permissions](Amazon ECS First Run Wizard Permissions)
- [https://aws.github.io/copilot-cli/docs/concepts/pipelines/](Copilot Pipelines)
- [https://www.npmjs.com/package/climod-add-script](climod-add-script)
