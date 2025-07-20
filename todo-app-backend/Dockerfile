# ✅ Stage 1: Build ứng dụng với Maven
FROM maven:3.9.6-eclipse-temurin-21 AS build

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy toàn bộ project (bao gồm pom.xml, src/, mvnw...)
COPY . .

# Cấp quyền chạy cho mvnw nếu có
RUN chmod +x mvnw

# Build project, tạo file .jar trong target/
RUN ./mvnw clean package -DskipTests

# ✅ Stage 2: Runtime container chỉ chứa JDK (nhẹ hơn)
FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy file jar từ stage build vào runtime
COPY --from=build /app/target/*.jar app.jar

# Render sẽ inject biến môi trường PORT, mặc định là 10000+
EXPOSE 8080
ENV PORT=8080

# ✅ Chạy ứng dụng Spring Boot
ENTRYPOINT ["java", "-jar", "app.jar"]