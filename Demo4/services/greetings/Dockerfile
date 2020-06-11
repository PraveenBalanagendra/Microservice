FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Demo4/services/greetings/greetings.csproj", "Demo4/services/greetings/"]
RUN dotnet restore "Demo4/services/greetings/greetings.csproj"
COPY . .
WORKDIR "/src/Demo4/services/greetings"
RUN dotnet build "greetings.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "greetings.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "greetings.dll"]
