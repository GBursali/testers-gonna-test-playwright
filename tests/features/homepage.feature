Feature: Google Search engine homepage

    Check google page

    Scenario: Google homepage search field shown
        Given A web browser on google page
        When "Elma armut" is written to the searchbar
        And click on search
        Then verify that captcha is here