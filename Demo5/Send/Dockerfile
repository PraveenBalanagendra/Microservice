FROM mcr.microsoft.com/dotnet/runtime:5.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Demo5/Send/Send.csproj", "Demo5/Send/"]
RUN dotnet restore "Demo5/Send/Send.csproj"
COPY . .
WORKDIR "/src/Demo5/Send"
RUN dotnet build "Send.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Send.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Send.dll"]
