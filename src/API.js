const basePath = 'https://test.mlmreadymade.com/mahavir/API';

export const ApiPaths = {
    RegisterApi: `${basePath}/register`,
    LoginApi: `${basePath}/register/login`,
    Dashboard: `${basePath}/Dashboard`,
    Directs: `${basePath}/Team/directteam`,
    GetWallet: `${basePath}/get_wallet`,
    Generation: `${basePath}/Team/my_generation`,
    SelfInvestment: `${basePath}/self_investment`,
    BuyPackage: `${basePath}/register/upgrade`,
    ConfirmOrder: `${basePath}/register/verify_order`,
    LevelIncome: `${basePath}/Incomes?type=level`,
    RoiIncome: `${basePath}/Incomes?type=roi`,
    RoiLevelIncome: `${basePath}/Incomes?type=roi_level`,
    Orders: `${basePath}/Orders/getOrderdata`,
    Withdraw: `${basePath}/withdraw`,
    WithdrawData: `${basePath}/withdrawal/data`,
}