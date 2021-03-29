Feature: Validate Search

  Scenario: Update dates to Search for a trip
    Given I am at Kayak page
    When I search a trip from 'Medellin' to 'San Francisco'
    And I select the date range for a trip 'abril 10', 'abril 20'
    And I choose the number of travelers 2 adults and 1 child
    And I Update the date range for a trip 'marzo 29', 'abril 13'
    And I select the lowest price
    Then I should see "Reserva: MDE a SFO, 10/4 — 20/4" displayed as the page title
