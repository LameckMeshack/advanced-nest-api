import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './entities/coffee.constant';

class ConfigService { }
class DevelopmentConfigService { }
class ProductionConfigService { }

const configServiceProvider = {
    provide: ConfigService,
    useClass:
        process.env.NODE_ENV === 'development'
            ? DevelopmentConfigService
            : ProductionConfigService,
};

@Module({
    imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
    controllers: [CoffeesController],
    providers: [CoffeesService, configServiceProvider, { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] }],
    // exports: [CoffeesService]

})
export class CoffeesModule {
}
