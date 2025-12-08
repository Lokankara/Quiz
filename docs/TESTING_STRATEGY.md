# Testing Strategy for Quiz Application

## Overview
This document outlines the testing strategy for the full-stack quiz application, covering both the React frontend and Java Spring Boot backend components. The goal is to achieve comprehensive test coverage across all layers of the application.

## Frontend Testing (React)

### Unit Tests
Unit tests have been created for all React components to ensure individual functionality:

- **Question Component**: Tests cover single and multi-select functionality, UI updates, and event handling
- **AnswerFeedback Component**: Tests verify correct rendering of feedback based on answer correctness
- **NavTab Component**: Tests check tab navigation and active state management
- **Page Components**: Tests for QuizPage, ResultPage, QuestionPage, StatisticsPage, and RestartPage verify rendering, API interactions, and navigation

### API Integration Tests
Tests for all API functions in `src/app/api.ts` to verify:
- Correct HTTP requests and response handling
- Error handling for failed requests
- Proper parameter serialization

### Component Integration Tests
Tests that verify interactions between multiple components and ensure proper data flow through the application.

## Backend Testing (Java Spring Boot)

### Unit Tests
- **Service Layer**: Comprehensive tests for `QuestionService` covering all business logic, including:
  - Retrieval of questions (with caching)
  - Answer processing and validation
  - Result calculation
  - Card management (add, remove, reset)
- **Repository Layer**: Tests for `QuestionRepository` covering CRUD operations

### Integration Tests
- **Controller-Service Integration**: Tests for `QuestionController` that verify:
  - HTTP request/response handling
  - Parameter validation
  - Proper service method invocation
- **Service-Repository Integration**: Tests ensuring proper data flow between service and repository layers
- **Controller-DAO Integration**: End-to-end tests covering the full request processing pipeline

## Test Coverage
The testing strategy ensures coverage of:
- All branches in conditional logic
- Error handling paths
- Edge cases and boundary conditions
- Happy path scenarios
- Security validations (e.g., input validation in restart endpoint)

## Running Tests

### Frontend Tests
```bash
npm test
```

### Backend Tests
```bash
./gradlew test
```

## Continuous Integration
Tests should be run as part of the CI pipeline to ensure code quality and prevent regressions.