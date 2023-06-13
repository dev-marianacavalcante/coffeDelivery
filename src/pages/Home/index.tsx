import { CoffeeList } from "./components/CoffeeList";
import { Intro } from "./components/Intro";

export function Home() {

    const Coffees = [
    {
        images: 'https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1687737600&Signature=SD2QRypmmGcwQ6Nn5w5QDfU0HdBwVxxQ5vDaJgjqv7ADoUjH-nh3BxgMrvEOuJebtoqR36D3zclvHb5FyyDP~3LTyE~3e4WwAooc8JCxPcPkY7roU-MMey2~niUPNXPodLT~GIOd~~X2f3XWm40EezStOKaoZt~Avc5Npdg3VdHMXPBPG1RDJGayRnTbhB4GJzd7frsbjJtVJnZpCZUdsl9KjlOpuCxoZ4NHAVP4z1WbsdiJp6qkGqJ2MRCTQZvrXHjLLicPxd3cihHTFjyObSQHx5oN4vSV8ISpRpVzBb7gWjZ0gifjrb1glOpHdwOUIa6zQsX6aFKMBpp8NeRBrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags: ['Tradicional'],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: '9,90', 
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/b6af/775d/aaa94dcb37dfe1ee6535aae5b9356e9a?Expires=1687737600&Signature=dzLV25jNJQ9QAIQ57ugTQgxB-hxSAb1Iyjfd8N8ZUAtmbEM9xzQvyl8i5KWeaYBW8l8ZyYC4LUHtZ2b~0rmgCV~dTh4y58BaOLsG~ckK353dVls7XrtGIQJAaP6PH7vFUQq11x1yNwJc9NviGkDyTBgeUpm3BrC-tiKR2QbMpsW2u62b9q-40aZpei32~dLyt3rwG4MtnKAdVEXrTU73Dyluo9E11gFrLXCmhjEtvKX0M3RaMV6hyp4jFTT7hbluAQQmADq~2sEJHdJ~ssTpWZfwQAONAR9i5muLoXhh54oxZ7VPb8v7eCIpyJCAEYJGOoAYJrvKMIdedQ9urwt-~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Tradicional'],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: '9,90', 
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/bcfa/72ad/62a8600eeded092c17fd14240624545e?Expires=1687737600&Signature=af7q-tuYGuuG2UolLuHSVfTkrKWy0VuMQdWW3SgoWOUUvNAZ-vBXiQCr1ds593AVnqqVqewRaRFBA15wcK6lmKfHNSCydczrEcF-e58TA4gdHefy~T44YDe9ze71cS2HnYo2-mbopkiFhB~BF-l7tBzmYA-d8WRE3cTaKTRZwO9HG2UC8Xh4gzaYCP0t6HkCSQUoPzx-RR7ts-45dJ7dsll132pOQwOP1jPRTBfDrLr1mCsAZ8dF1bbNNlSZB3Rd4wcqNHT38Qo02353VG6ytzoC0ZZrKjBbRJAFXPU3yt7OSRmuv3MseDyoI71Khtx4Rmc7YQAJPLqOtBSIzF3aOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Tradicional'],
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: '9,90', 
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/f389/2f36/d263d0013831cd5b1fb27c6d2ac64353?Expires=1687737600&Signature=ppyGVyeBzK93rRr3ZcqSiKddW3gQfs5lOZErmxW1DtIG1mRluayxA1Sig3y11OXuuln4--7eXtmb~JroTKNbAVBNv7MYkvd-3ir4wjjPB5rg8ziDE78LRPUsPvqL4UtdCSP8xqsdNv65SpVv-8oLPeNHnZezkLrCE4HsfKuuA-hlZdQmAc-rfEW9IHGFPEANIDlsAikyzsd0Klm-ULJ2pnODvbkwBBlPRp7hvtPmtPYK3ZjZDgfifIH6apQZRSMIU5ACZDUYYME85K2Kbbfpm~72cNTA3Lkv~BvRpHed0jW7A5ebEVYRYns8U8TK~R80n8X5cI1KiL0S-3hBgx9IjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Tradicional', 'Gelado'],
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: '9,90',
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/96a1/748f/55962d2032bd0e2555d1261409dbd24d?Expires=1687737600&Signature=nuMGTPLeXv-43ieqBs6RJuUaoMORN4It2MdV63nHEjdi1UmUJrc-AyDe3z3SWQzutEiFPLBntFOU8OEyY6BUyqe16Hzk0-26chLGXl5Eyghi3HOrNzXWKtHcB-3k0TQpWSoT0ONzHOJ7X8kagO7cSAy0WCdEr~65pt5hEOM29hNFkT-pXfO5A8uBSdo~8c1uL2MJ9vT~Dn~2v-0TbvdWxx7eeHZ1zAVy-WBYopBUrb146UZeLdE4zyi~xkek2AgKFGKl5tnt8ipzc2u1SfGuNY6d8eKU~EM2qhVY0lwGLI4JuWmkvVvfF5rgE51H3~6YewUai7yehxmEu42AUvpsLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Tradicional', 'com leite'],
        name: 'Cafe com leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: '9,90',
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/0a3c/9586/9a75d3fa0ffdecc4bc46ca83d2342e1c?Expires=1687737600&Signature=XM~RgJaaJ8dnGhTsVYu~H48Of~tbak7qdM6Zp1Dzk3FAMg0ycfqS7B17IcII-6oOeP8SgxnyJv8~AMEYIx51EeAcdflMJNgQ2rFpad6eI0giA8WHN9QHlA10l7c9ww1eOytxQ44EsSAlHOmKdmoGWXRaGOqczx7V2X0YQ6YQ872i39FR83WFuwX6VZjPZXuobjratKoKVHmOaRLeuCeY~7erRmm0RiQAWR17eVzVQ~ry-2sthZK9Skfv2YPUuKjoRF2SCPwQdhdS0QoBEC5QpJmLSzZ3tWCISNNJDmFbgbkYlSP-HrkQJsrJ11dh0XB9Rg3MehSLenqJW5aFXDjB2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Tradicional', 'com leite'],
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: '9,90',
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/6693/81b7/0a9565b6f322ac8b5229ee4fc4b47825?Expires=1687737600&Signature=F6H0QVWgNvIy9UY5KWaC-Rjho71soB-~9WwmuNHyY0yoid8nMpwKbjy5ynRMeKDM9JegiK2b4aDZ22BsZASiMGI1ny813jYOiuhOjq~1oI3paKVB85Tty1BfmOfKQa4UHzx1mZ0DQYxvUxB5PG~WMrfj~VfdkV5WanfuE5yLxig1y1wbV3dbvFHVID4VdjX8JmkJfpUXWFey4nwLS1oWa1N8rNsjRPJn1IwhgQ2JKg7JbPl5mCsyobmcwK7Boiszxqa6fBOEjZPjjwmPITzQoDVrWDvZQum3GbBolwo0J-kI1lwPt8UEjrawRPAvL595wQN3rooOYG32DZq0T6zfyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Tradicional', 'com leite'],
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: '9,90',
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/890a/8773/a655c4fabfc9a7ecdc389e6ea93587ac?Expires=1687737600&Signature=Hct26WY5XG2gHtTwqwxh~797RcOHW2UnzG1LVgTXDerEIns2Jy9~bvgMTDZQ5tUBdj9qVxK8IMTMG0jL1sySx-LVoaGRn84XlYieur8cPKa5r531rLFJE08uxLCkQ~nzy4tN~-u2S5zBTvNyjm2hPLrXZDCeWxGu80rskFkxr69OyLDd0YY-pP0K5OOXGVhgw51mEJYC2JVrbHzY0cpBYWEdUwSDvaH5xXZDijnYsIqyk9odg1NKpV4yepN78to5rbi6PSKs9tKhdQPM1TAmZPPOQysKQzgrvdx0luvoI2RPP3MfPULRGnUF7tU174lyknVv2XsbmMVQVHB4xgxlqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Tradicional', 'com leite'],
        name: 'Macchiato',
        description: 'Bebida com canela feita de doses iguais de café, leite e espumaCafé expresso misturado com um pouco de leite quente e espuma',
        price: '9,90',
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/bc3e/4798/837b2a3ba5d0fa098e7e39985025efb7?Expires=1687737600&Signature=Xpm6Hfc0ICLkdWpKE1wJVzsY5Vw-pv~jr6Lbrwcm3zqUifd9mEJWjGyxvks01IIczd-~KImMYMRCQpb8f5t1xwWTiX4yjWWFc00wPLdBlIsnGeD~cqlI7BqPzPtlCVgcBZCmxWoDSoRIsa7a94n-cmJaad~UYl9mWorkeu~uXBbp54KELOlLf423glQz6JYHP9ZsfNh0YG0Ay~tG3pHxzyvg6gZw6LxhScn2os0-ja2V4hv-RmMSHMKeBtk9Ta~0UnAkZHDxDWCyu3UaJ0YbqjtkdkFjduqJRNGOdQZqt0tyOQl6zdv461D2kUJuVDuwkfVuDrADanTUFwABh0Gz~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Tradicional', 'com leite'],
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: '9,90',
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/4462/16dc/20b9de473c3aadc304466df059e1887e?Expires=1687737600&Signature=bITMpufJ5Ktnv4qNch6qjfMAF-kyRCVZjL4Ir82FoEOI24~BEhR7gHEu~CgmEtzJSeIMYkDU~WwNQsvZgjl4fInGWrbIUiU0LRk0k5kiXU4QpLIRxUiTmI3ubUcmKomXHYuY2O-4crKYk5akkdgCXHdym6fT-n9tijbTDh6Lvi94Dk65teAmOTOdyNYpFbcZKwBUdp1N5Cymb28Wb0xJrj2FzxvsPXd~BznKHIdCYHqW~l91AegDPJ-WoAv5I6hhMf5frEEcHbecEtVUpi4g0uIcmay3GBOoxrUnvDgb6E6Hg~M5RQe-3He~4uqKzxHm2TJ~lX95hJ~ueUFVjw1PLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Especial', 'com leite'],
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: '9,90',
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/dae3/2866/45ab1873edeac1c90c31203f5bf3ed52?Expires=1687737600&Signature=RajDY9EtASJNZx4pwjKKxPv9S8y6fc-A3larYsd1uKebFtcuEkhA4gadhnCuiESzsyotiTmz1OZOrYgVK7jfCusDlYPysoKk5lnSAW-n1qLTRNgmX4Tkm-u63SVIPxMwB-gBFMAcEmCUDvXhNvQYqgkwWipWsULuWo8lV6QiCtwztqDWASTcGslrFbfAjfpzmoadlGlcyVqA3~8qX-cVQ-HII-sv9HhyGbcqFimS5Uc7-by-r9ZRxqj-~VfE6iSvhunlzFFGCsC2jCXHL~tkDl4w7Jzai6CHe7tUqbR-UzfTizwycJh22qvLLnhsWG9vBXJQnQaBfgX9jMR9-iN7yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Especial', 'alcoólico', 'Gelado'],
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: '9,90',
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/64fd/9a26/b6d3187556021c2da9fc80f2da41088f?Expires=1687737600&Signature=hv-UPGY7be9hFQABTGAju5-0sq9c0vrXMO1CaOSi1XFNx2Eur-qaBbwZrod0QV5x7-9a542PEQNOLlwck4NDBEVS-OID~FCWVPxPLGxrOrOkXj8UcaUcDD3Hcn-91KuVl6KwOntYgWVRMly0MH~Tu~3W4JSGCblgsvgMn7FPP2-bbL9NNqFI9A6wz9Ad0nhGQm7UJIK~GNh6W9XZVuCrew6FjqHoQddagLy5R3BbEjIr9WMoAFWy4eYCibmJaLOxgVf5lPLo23BVUzL54Wy1BH6yLfCKgCr69zGN6XKuY4H4Q5m-73lT2n73MK1OMxtAjJaDZEbDBkY2-x-nvJSOTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Especial'],
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: '9,90',
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/8bcb/3d33/7b04857330d98e72e67bde570cbc8963?Expires=1687737600&Signature=lMLk~qvY~sTtg5~z5sV4zAwGGWYoix2vjk-HCGxpj9j5JBgkomwZBWePDzubdaY3Q~w6zL2xn2pxJTH9LH02ukiyms3FYd0emAdqFZq41~uNdjz78ynjltM0sPdfyURMG~jSKUCw-VOYCG5qgt3qTPq6HMU1JQF8FP8CP5nl7MZwxbdL0erDVvtno79fgYVuQdjiEj3XZAefw2GtEep1hOfiyyij72MOxQ9bFSOfa3MWyjZ0Uc~QM4WeClpgaHPUC30SCjq7teH9XwahhPOaJ5hBhsIkTFDZD54ZC7K9lCP2aqAChWXi7S5RVgIZFyuA6dDJBMMlJUHhxVuumi9kJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Especial'],
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: '9,90',
    },
    {
        images:'https://s3-alpha-sig.figma.com/img/53b9/9cd5/c0cac4ecf7b9bd81c976cdd9fe2ab3a3?Expires=1687737600&Signature=VRLYawCA8fNYGNwCIqZtRg0I0ReLJLCcBM4AStQ20nltZ5HvhN7nVZq-J6LZjw6~iVOHvU1gAq-DNUg9G6ii8K9WGBaobBMC~GhqrynL9vqYZcqjOUWx4YeFowsVAalg9~TmXms3i6mMi5sZq-Oz8tkzdN9XzP0~u~R-Gncy3kytBApyjvJnZGkPRt9enjtquLMu3r0uzebv7P4j5Ihl8Ps28h0S2S5kE4Ij0nykTS1uvbg7wqwnPtOayVpSXa0R94Sog7NYU2r8iEpPW98JT-uhWujCM6ZPeb-aV67iH2AomuzVAQ~sXC~YDTk~DoHkAUqkuwijKNtZWdfryHnBCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        tags:['Especial', 'alcoólico'],
        name: 'Irlandês',
        description: 'Bebida preparada com Bebida a base de café, uísque irlandês, açúcar e chantilly de café árabe e especiarias',
        price: '9,90',
    },
    ]

    return (
        <>
          <Intro/>
          <CoffeeList coffees={Coffees}/>
        </>
    )
}