FROM mcr.microsoft.com/dotnet/runtime:5.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Demo5/Receive/Receive.csproj", "Demo5/Receive/"]
RUN dotnet restore "Demo5/Receive/Receive.csproj"
COPY . .
WORKDIR "/src/Demo5/Receive"
RUN dotnet build "Receive.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Receive.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Receive.dll"]
