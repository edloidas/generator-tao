# Contributing to <%= moduleName %> #

♥ [<%= moduleName %>](https://github.com/<%= githubUsername %>/<%= moduleName %>) and want to get involved?
Thanks! There are plenty of ways you can help!

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Using the issue tracker ##

The [issue tracker](https://github.com/<%= githubUsername %>/<%= moduleName %>/issues) is the preferred channel for [bug reports](#bugs), [features requests](#features) and [submitting pull requests](#pull-requests), but please respect the following restrictions:

* Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.

* Please **do not** open issues or pull requests regarding the code in
  ... (open them in their respective repositories).

## Bug reports ##

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** -- check if the issue has already been
   reported.

2. **Check if the issue has been fixed** -- try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem** -- ideally create a live example.

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being reported. This might include the lines of code that you have identified as causing the bug, and potential solutions (and your opinions on their merits).


## Feature requests ##

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to *you* to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

## Pull requests ##

Good pull requests - patches, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

**Please ask first** before embarking on any significant pull request (e.g. implementing features, refactoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

Please adhere to the coding conventions used throughout a project (indentation, accurate comments, etc.) and any other requirements (such as test coverage).

Adhering to the following this process is the best way to get your work included in the project:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/<%= moduleName %>.git doa
   # Navigate to the newly cloned directory
   cd <%= moduleName %>
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/<%= githubUsername %>/<%= moduleName %>.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to these [git commit message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) or your code is unlikely be merged into the main project. Use Git's [interactive rebase](https://help.github.com/articles/interactive-rebase) feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description.

**IMPORTANT**: By submitting a patch, you agree to allow the project owners to license your work under the the terms of the [MIT License](LICENSE).

## Git Commit Messages ##

* Use the present tense ("Add feature" not "Added feature").
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
* Limit the first line to 72 characters or less.
* Reference issues and pull requests liberally.
* Consider starting the commit message with an applicable emoji:
  - :art: `:art:` when improving the format/structure of the code.
  - :racehorse: `:racehorse:` when improving performance.
  - :non-potable_water: `:non-potable_water:` when plugging memory leaks.
  - :memo: `:memo:` when writing docs.
  - :penguin: `:penguin:` when fixing something on Linux.
  - :apple: `:apple:` when fixing something on Mac OS.
  - :checkered_flag: `:checkered_flag:` when fixing something on Windows.
  - :bug: `:bug:` when fixing a bug.
  - :fire: `:fire:` when removing code or files.
  - :green_heart: `:green_heart:` when fixing the CI build.
  - :white_check_mark: `:white_check_mark:` when adding tests.
  - :lock: `:lock:` when dealing with security.
  - :arrow_up: `:arrow_up:` when upgrading dependencies.
  - :arrow_down: `:arrow_down:` when downgrading dependencies.
  - :shirt: `:shirt:` when removing linter warnings.
  - :package: `:package:` release or major (SemVer) update.
