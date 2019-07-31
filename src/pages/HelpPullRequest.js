import React from "react"

export default () => <>
    <div className="container">
        <div className="row">
            <div className="col s12 m12">
                <h1 className="header center blue-text">How to do the Pull Request</h1>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <h5 className="col s12 m3 header"> 1.Go to <a href="https://github.com/jscraftcamp/website"> our Github -
                Repo </a> and fork it.</h5>
            <img className="col s12 m9" src="/img/pr_screenshots/fork.png"/>
        </div>
        <div className="row">
            <h5 className="col s12 m3 header">2. Clone <b>your fork</b>.</h5>
            <img className="col s12 m9" src="/img/pr_screenshots/clone.png"/>
        </div>
        <div className="row">
            <h5 className="col s12 m12 header"> 3. Add your JSON - file, commit and push.
            </h5>
        </div>
        <div className="row">
            <h5 className="col s12 m3 header">4. Go to <a href="https://github.com/jscraftcamp/website">our
                Github-Repo</a> and create a <b>New pull request</b>. Click on <b>compare across forks</b>.</h5>
            <img className="col s12 m9" src="/img/pr_screenshots/compare_forks.png"/>
        </div>
        <div className="row">
            <h5 className="col s12 m3 header">5. Compare <b>jscraftcamp/master</b> to <b> your master</b>.</h5>
            <img className="col s12 m9" src="/img/pr_screenshots/compare.png"/>
        </div>
        <div className="row">
            <div className="col s12 m3">
                <h5 className="header">6. Fill comment section, while waiting for travis to complete.</h5>
                <p className="block">Make shure, you read the comment section carefully. Accept the paragraphs and
                    insert an [X] as sign of your acceptance.</p>
                <p className="block">Travis (our CI-Server) will check, if your pull request, is valid JSON and your PR
                    fullfills all requirements.</p>
            </div>
            <img className="col s12 m9" src="/img/pr_screenshots/fill_out_comment.png"/>
        </div>

        <div className="row">
            <div className="col s12 m3">
                <h5 className="header">7a1. If something goes wrong&hellip;</h5>
                <p className="block">If Travis detects an error, click on <b>Details</b>, to get a detailed error log.
                </p>
            </div>
            <img className="col s12 m9" src="/img/pr_screenshots/travis_fail.png"/>
        </div>

        <div className="row">
            <div className="col s12 m3">
                <h5 className="header">7a2. See the Details</h5>
                <p className="block">Here you will find the cause of the error. In the example screenshot on the right,
                    the JSON was invalid therefore you get the somewhat strange "<i>before all hook</i>"-message. In
                    other cases, you get more helpful messages, like "<i>must contain a name</i>".</p>
            </div>
            <img className="col s12 m9" src="/img/pr_screenshots/travis_details.png"/>
        </div>

        <div className="row">
            <div className="col s12 m3">
                <h5 className="header">7b. Everything 's green&hellip;</h5>
                <p className="block">If Travis doesnt report an error, your JSON is most likely ok! &mdash; <b>Welcome
                    to #JSCC20</b>.</p>
            </div>
            <img className="col s12 m9" src="/img/pr_screenshots/travis_success.png"/>
        </div>


    </div>

</>