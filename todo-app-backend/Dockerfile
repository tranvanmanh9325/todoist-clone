# ✅ Stage 1: Build ứng dụng với Maven (JDK 21 + Maven)
FROM maven:3.9.6-eclipse-temurin-21 AS build

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy toàn bộ project
COPY . .

# Đảm bảo quyền thực thi cho mvnw (nếu có)
RUN chmod +x mvnw

# Dùng wrapper nếu có, fallback sang Maven nếu không
RUN ./mvnw clean package -DskipTests || mvn clean package -DskipTests

# ✅ Stage 2: Runtime chỉ chứa JDK (JRE đủ cho Spring Boot)
FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy file .jar từ stage build
COPY --from=build /app/target/*.jar app.jar

# Expose port (Render sẽ tự inject env PORT)
EXPOSE 8080

# ✅ Cho phép override PORT từ Render
ENV PORT=8080

# ✅ Entrypoint Spring Boot
ENTRYPOINT ["java", "-Dserver.port=${PORT}", "-jar", "app.jar"]