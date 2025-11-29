# Stage 1: build
FROM eclipse-temurin:21-jdk AS build

WORKDIR /app

COPY gradlew .
COPY gradle gradle
COPY build.gradle settings.gradle ./
COPY src src

RUN chmod +x ./gradlew
RUN ./gradlew clean build -x test --no-daemon

# Stage 2: runtime
FROM eclipse-temurin:21-jdk AS runtime

WORKDIR /app

COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]
