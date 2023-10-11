var documenterSearchIndex = {"docs":
[{"location":"api/#Kang-api","page":"Kang api","title":"Kang api","text":"","category":"section"},{"location":"api/#Raytracing-Functions","page":"Kang api","title":"Raytracing Functions","text":"","category":"section"},{"location":"api/","page":"Kang api","title":"Kang api","text":"Modules = [Kang]","category":"page"},{"location":"api/#Kang.AbstractMetric","page":"Kang api","title":"Kang.AbstractMetric","text":"abstract type AbstractMetric\n\nAbstract Metric Type\n\n\n\n\n\n","category":"type"},{"location":"api/#Kang.Kerr","page":"Kang api","title":"Kang.Kerr","text":"struct Kerr{T} <: Kang.AbstractMetric\n\nKerr Metric in Boyer Lindquist Coordinates\n\nmass: M = mass\nspin: a = J/M, where J is the angular momentum and M is the mass of the blackhole.\n\n\n\n\n\n","category":"type"},{"location":"api/#Kang.Gθ-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Vararg{Any, 6}}} where T","page":"Kang api","title":"Kang.Gθ","text":"Gθ(\n    metric::Kang.Kerr{T},\n    α,\n    β,\n    θs,\n    θo,\n    isindir,\n    n\n) -> NTuple{5, Any}\n\n\nReturns the antiderivative G_theta=intfracdthetasqrtTheta(theta)\n\nArguments\n\nmetric: Kerr{T} metric\nα : Horizontal Bardeen screen coordinate\nβ : Vertical Bardeen screen coordinate\nθs : Emission inclination\nθo : Observer inclination\nisindir : Is the path direct or indirect?\nn : nth image ordered by minotime\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.Ir-Tuple{Kang.Kerr, Bool, Vararg{Any, 4}}","page":"Kang api","title":"Kang.Ir","text":"Ir(metric::Kang.Kerr, νr::Bool, θo, rs, α, β) -> Any\n\n\nReturns the antiderivative I_r=intfracdrsqrtmathcalR(r)\n\nArguments\n\nmetric: Kerr{T} metric\nνr : Sign of radial velocity direction at emission\nθo : Observer inclination\nα  : Horizontal Bardeen screen coordinate\nβ  : Vertical Bardeen screen coordinate\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang._isreal2-Union{Tuple{Complex{T}}, Tuple{T}} where T","page":"Kang api","title":"Kang._isreal2","text":"_isreal2(num::Complex{T}) -> Any\n\n\nChecks if a complex number is real to some tolerance\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.emission_coordinates-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Vararg{Any, 6}}} where T","page":"Kang api","title":"Kang.emission_coordinates","text":"emission_coordinates(\n    metric::Kang.Kerr{T},\n    α,\n    β,\n    θs,\n    θo,\n    isindir,\n    n\n) -> NTuple{6, Any}\n\n\nEmission radius and azimuthal angle for point originating at inclination θs whose nth order image appears at the screen coordinate (α, β). for an observer located at inclination θo.\n\nArguments\n\nmetric : Kerr{T} metric\nα : Horizontal Bardeen Screen Coordinates\nβ : Vertical Bardeen Screen Coordinates\nθs : Emission Inclination\nθo : Observer Inclination\nisindir : Whether emission to observer is direct or indirect\nn : Image index\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.emission_coordinates_fast_light_inclination_parameterized-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Vararg{Any, 6}}} where T","page":"Kang api","title":"Kang.emission_coordinates_fast_light_inclination_parameterized","text":"emission_coordinates_fast_light_inclination_parameterized(\n    metric::Kang.Kerr{T},\n    α,\n    β,\n    θs,\n    θo,\n    isindir,\n    n\n) -> Tuple{Any, Any, Any, Bool, Bool}\n\n\nEmission radius and azimuthal angle for point originating at inclination θs whose nth order image appears at the screen coordinate (α, β).  for an observer located at inclination θo.\n\nArguments\n\nmetric : Kerr{T} metric\nα : Horizontal Bardeen Screen Coordinates\nβ : Vertical Bardeen Screen Coordinates\nθs : Emission Inclination\nθo : Observer Inclination\nisindir : Whether emission to observer is direct or indirect\nn : Image index\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.emission_inclination_mino_time_parameterized-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Vararg{Any, 4}}} where T","page":"Kang api","title":"Kang.emission_inclination_mino_time_parameterized","text":"emission_inclination_mino_time_parameterized(\n    metric::Kang.Kerr{T},\n    α,\n    β,\n    θo,\n    τ\n) -> NTuple{6, Any}\n\n\nEmission inclination for point at Mino time τ whose image appears at screen coordinate (α, β).\n\nArguments\n\nmetric : Kerr{T} metric\nα : Horizontal Bardeen Screen Coordinates\nβ : Vertical Bardeen Screen Coordinates\nθo : Observer Inclination\nτ : Mino Time\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.emission_inclination_radius_parameterized-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Vararg{Any, 5}}} where T","page":"Kang api","title":"Kang.emission_inclination_radius_parameterized","text":"emission_inclination_radius_parameterized(\n    metric::Kang.Kerr{T},\n    α,\n    β,\n    θo,\n    rs,\n    νr\n) -> NTuple{6, Any}\n\n\nEmission inclination for point originating at inclination rs whose nth order image appears at screen coordinate (α, β).\n\nArguments\n\nmetric : Kerr{T} metric\nα : Horizontal Bardeen Screen Coordinates\nβ : Vertical Bardeen Screen Coordinates\nθo : Observer Inclination\nτ : Mino Time\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.emission_radius_inclination_parameterized-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Vararg{Any, 6}}} where T","page":"Kang api","title":"Kang.emission_radius_inclination_parameterized","text":"emission_radius_inclination_parameterized(\n    metric::Kang.Kerr{T},\n    α,\n    β,\n    θs,\n    θo,\n    isindir,\n    n\n) -> Tuple{Any, Bool, Bool}\n\n\nEmission radius for point originating at inclination θs whose nth order image appears at the screen coordinate (α, β).  Returns NaN if the emission coordinates do not exist for that screen coordinate.\n\nArguments\n\nmetric : Kerr{T} metric \nα : Horizontal Bardeen screen coordinate\nβ : Vertical Bardeen screen coordinate\nθs : Emission inclination\nθo : Observer inclination\nisindir : Is emission to observer direct or indirect\nn : Image index\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.emission_radius_mino_time_parameterized-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Vararg{Any, 4}}} where T","page":"Kang api","title":"Kang.emission_radius_mino_time_parameterized","text":"emission_radius_mino_time_parameterized(\n    metric::Kang.Kerr{T},\n    α,\n    β,\n    τ,\n    θo\n) -> Tuple{Any, Any, Any}\n\n\nEmission radius for point originating at at Mino time τ whose image appears at the screen coordinate (α, β).  Returns NaN if the emission coordinates do not exist for that screen coordinate.\n\nArguments\n\n-metric : Kerr{T} metric -α : Horizontal Bardeen screen coordinate -β : Vertical Bardeen screen coordinate -θs : Emission inclination -θo : Observer inclination -isindir : Normalized angular momentum -n : Image index\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.get_radial_roots-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Any, Any}} where T","page":"Kang api","title":"Kang.get_radial_roots","text":"get_radial_roots(\n    metric::Kang.Kerr{T},\n    η,\n    λ\n) -> NTuple{4, Any}\n\n\nReturns roots of r^4 + (a^2-η-λ^2)r^2 + 2(η+(a-λ)^2)r - a^2η\n\nArguments\n\nmetric: Kerr{T} metric\nη  : Reduced Carter constant\nλ  : Reduced azimuthal agular momentum\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.horizon-Union{Tuple{Kang.Kerr{T}}, Tuple{T}} where T","page":"Kang api","title":"Kang.horizon","text":"horizon(metric::Kang.Kerr{T}) -> Any\n\n\nOuter Horizon for the Kerr metric.\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.metric_dd-Tuple{Kang.AbstractMetric, Vararg{Any}}","page":"Kang api","title":"Kang.metric_dd","text":"metric_dd(metric::Kang.AbstractMetric, args...) -> Any\n\n\nReturns the metric in some representation (usually as an nxn matrix).\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.metric_dd-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Any, Any}} where T","page":"Kang api","title":"Kang.metric_dd","text":"metric_dd(metric::Kang.Kerr{T}, r, θ) -> Any\n\n\nInverse Kerr metric in Boyer Lindquist (BL) coordinates.\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.metric_dd-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Any}} where T","page":"Kang api","title":"Kang.metric_dd","text":"metric_dd(metric::Kang.Kerr{T}, coordinates) -> Any\n\n\nKerr metric in Boyer Lindquist (BL) coordinates.\n\nArguments\n\nmetric : Kerr metric\ncoordinates : Coordinates (t, r, θ, ϕ)\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.metric_uu-Tuple{Kang.AbstractMetric, Vararg{Any}}","page":"Kang api","title":"Kang.metric_uu","text":"metric_uu(metric::Kang.AbstractMetric, args...) -> Any\n\n\nReturns the inverse metric in some representation (usually as an nxn matrix).\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.metric_uu-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Any, Any}} where T","page":"Kang api","title":"Kang.metric_uu","text":"metric_uu(metric::Kang.Kerr{T}, r, θ) -> Any\n\n\nInverse Kerr metric in Boyer Lindquist (BL) coordinates.\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.metric_uu-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Any}} where T","page":"Kang api","title":"Kang.metric_uu","text":"metric_uu(metric::Kang.Kerr{T}, coordinates) -> Any\n\n\nInverse Kerr metric in Boyer Lindquist (BL) coordinates.\n\nArguments\n\nmetric : Kerr metric\ncoordinates : Coordinates (t, r, θ, ϕ)\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.mino_time-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Vararg{Any, 6}}} where T","page":"Kang api","title":"Kang.mino_time","text":"mino_time(\n    metric::Kang.Kerr{T},\n    α,\n    β,\n    θs,\n    θo,\n    isindir,\n    n\n) -> Any\n\n\nMino time of trajectory between two inclinations for a given screen coordinate\n\nArguments\n\nα : Horizontal Bardeen screen coordinate\nβ : Vertical Bardeen screen coordinate \na : Blackhole angular Momentum\nθs : Emission inclination\nθo : Observer inclination\nisindir : Is the path direct or indirect?\nn : nth image in orde of amount of minotime traversed\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.r_potential-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Any, Any, Any}} where T","page":"Kang api","title":"Kang.r_potential","text":"r_potential(metric::Kang.Kerr{T}, η, λ, r) -> Any\n\n\nRadial potential of spacetime\n\nArguments\n\nmetric: Kerr{T} metric\nη  : Reduced Carter constant\nλ  : Reduced azimuthal agular momentum\nr  : Boyer Lindquist radius\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.radial_integrals_case2-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Any, NTuple{4, T} where T, Any, Any}} where T","page":"Kang api","title":"Kang.radial_integrals_case2","text":"radial_integrals_case2(\n    metric::Kang.Kerr{T},\n    rs,\n    roots::NTuple{4, T} where T,\n    τ,\n    νr\n) -> NTuple{5, Any}\n\n\nReturns the radial integrals for the case where there are four real roots in the radial potential, with roots outside the horizon.\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.radial_integrals_case3-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Any, NTuple{4, T} where T, Any}} where T","page":"Kang api","title":"Kang.radial_integrals_case3","text":"radial_integrals_case3(\n    metric::Kang.Kerr{T},\n    rs,\n    roots::NTuple{4, T} where T,\n    τ\n) -> NTuple{5, Any}\n\n\nReturns the radial integrals for the case where there are two real roots in the radial potential\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.radial_integrals_case4-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Any, NTuple{4, T} where T, Any}} where T","page":"Kang api","title":"Kang.radial_integrals_case4","text":"radial_integrals_case4(\n    metric::Kang.Kerr{T},\n    rs,\n    roots::NTuple{4, T} where T,\n    τ\n) -> Tuple\n\n\nReturns the radial integrals for the case where there are no real roots in the radial potential\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.raytrace-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Vararg{Any, 4}}} where T","page":"Kang api","title":"Kang.raytrace","text":"raytrace(\n    metric::Kang.Kerr{T},\n    α,\n    β,\n    θo,\n    τ\n) -> NTuple{6, Any}\n\n\nRaytrace a point that appears at the screen coordinate (α, β) for an observer located at inclination θo\n\nArguments\n\nmetric : Kerr{T} metric\nα : Horizontal Bardeen Screen Coordinates\nβ : Vertical Bardeen Screen Coordinates\nθo : Observer Inclination\nτ : Mino Time\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.regularized_Pi-Tuple{Any, Any, Any}","page":"Kang api","title":"Kang.regularized_Pi","text":"regularized_Pi(n, ϕ, k) -> Any\n\n\nRegularized elliptic integral of the third kind\n\nArguments\n\nn: Parameter\nϕ: Arguments\nk: Parameter\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.α-Tuple{Kang.Kerr, Any, Any}","page":"Kang api","title":"Kang.α","text":"α(_::Kang.Kerr, λ, θo) -> Any\n\n\nHorizontal Bardeen Screen Coordinate\n\nArguments\n\nmetric: Kerr\nα: Horizontal Bardeen screen coordinate\nθo: Observer inclination\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.αboundary-Tuple{Kang.Kerr, Any}","page":"Kang api","title":"Kang.αboundary","text":"αboundary(metric::Kang.Kerr, θs) -> Any\n\n\nDefines a horizontal boundary on the assmyptotic observers screen where emission that originates from θs must fall within.\n\nArguments\n\nmetric: Kerr metric\nθs  : Emission Inclination\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.β-Tuple{Kang.Kerr, Any, Any, Any}","page":"Kang api","title":"Kang.β","text":"β(metric::Kang.Kerr, λ, η, θo) -> Any\n\n\nHorizontal Bardeen Screen Coordinate\n\nArguments\n\nmetric: Kerr\nλ: Energy reduced Azimuthal angular momentul\nη: Energy reduced Carter integral \nθo: Observer inclination\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.βboundary-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Any, Any, Any}} where T","page":"Kang api","title":"Kang.βboundary","text":"βboundary(metric::Kang.Kerr{T}, α, θo, θs) -> Any\n\n\nDefines a vertical boundary on the Assyptotic observers screen where emission that originates from θs must fall within.\n\nArguments\n\nmetric: Kerr{T} metric\nα   : Horizontal Bardeen screen coordinate\nθo  : Observer inclination\nθs  : Emission Inclination\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.η-Tuple{Kang.Kerr, Any, Any, Any}","page":"Kang api","title":"Kang.η","text":"η(metric::Kang.Kerr, α, β, θo) -> Any\n\n\nEnergy reduced Carter integral\n\nArguments\n\nmetric: Kerr\nα: Horizontal Bardeen screen coordinate\nβ: Bardeen vertical coordinate\nθo: Observer inclination\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.θ_potential-Union{Tuple{T}, Tuple{Kang.Kerr{T}, Any, Any, Any}} where T","page":"Kang api","title":"Kang.θ_potential","text":"θ_potential(metric::Kang.Kerr{T}, η, λ, θ) -> Any\n\n\nTheta potential of a Kerr blackhole\n\nArguments\n\nmetric: Kerr{T} metric\nη  : Reduced Carter constant\nλ  : Reduced azimuthal agular momentum\nθ  : Boyer Lindquist inclination\n\n\n\n\n\n","category":"method"},{"location":"api/#Kang.λ-Tuple{Kang.Kerr, Any, Any}","page":"Kang api","title":"Kang.λ","text":"λ(_::Kang.Kerr, α, θo) -> Any\n\n\nEnergy reduced azimuthal angular momentum\n\nArguments\n\nmetric: Kerr\nα: Horizontal Bardeen screen coordinate\nθo: Observer inclination\n\n\n\n\n\n","category":"method"},{"location":"kerr_geodesic_summary/#The-Geodesics-of-the-Kerr-Metric","page":"Theory","title":"The Geodesics of the Kerr Metric","text":"","category":"section"},{"location":"kerr_geodesic_summary/#Geodesic-Equations","page":"Theory","title":"Geodesic Equations","text":"","category":"section"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"Geodesics are extremal solutions to the local optimization problem of the action:","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"beginequation\nS = int_tildetau_i^tildetau_f dtildetausqrt-g_munudot x^mu dot x^nu\nendequation","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"defined on a manifold with metric g_munu, which in the case of the Kerr, can be written in Boyer-Lindquist coordinates[BL] as:","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"beginequation\ng_munu=left(\nbeginarraycccc\n fracr_s rSigma -1  0  0  -fraca^2 sin ^2(theta ) r_s rSigma  \n 0  fracSigma Delta   0  0 \n 0  0  Sigma   0 \n -fraca^2 r sin ^2(theta ) r_sSigma   0  0  sin ^2(theta ) left(fraca^2\n   sin ^2(theta ) r_s rSigma +a^2+r^2right) \nendarray\nright)\nendequation","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"where Sigma = r^2 +a^2cos(theta)^2 and Delta=r^2- r_s r+a^2.  In general, geodesics are constrained to satisfy the geodesic equations,","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"beginequation\nfracd^2x^mudtildetau^2 =-Gamma^mu_alphabetadot x^alpha dot x^beta\nendequation","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"where,","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"beginequation\nGamma^mu_alphabeta = frac12g^munu(g_alphanu beta + g_betanu alpha - g_alphabeta nu)\nendequation","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"are the Christoffel symbols.","category":"page"},{"location":"kerr_geodesic_summary/#Hamilton-Jacobi-Equations","page":"Theory","title":"Hamilton-Jacobi Equations","text":"","category":"section"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"The Kerr family of metrics belongs to the class of type-D (type-{2,2}) spacetimes. These spacetimes admit a Killing-Yano tensor [PW] from which it is possible to define a Carter constant and Penrose-Walker constant.  The Carter constant, in particular, allows solutions of the geodesic equations to be expressed in terms of quadratures through the Hamilton-Jacobi approach[Carter], whose equations are given by:","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"beginalign\nH\n    =frac12g^munup_mup_nu\nK\n    =fracpartial Spartial tildetau + Hleft(x fracpartial Spartial x tildetauright)=0\np_mu\n    =fracpartial Spartial x^mu\nendalign","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"The Carter constant is useful since it lets the Hamilton-Jacobi equations be seperable, resulting in a Hamiltonian principle function that takes the form,","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"beginequation\nS =  int fracsqrtmathcal RDeltadr + intsqrtTheta dtheta-Et +Lphi+ frac12kappatildetau\nendequation","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"where kappa is the conserved four momentum magnitude, E is the conserved energy, L is the conserved azimuthal angular momentum, and","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"beginalign\nmathcal R\n    =Delta-C+kappa r - (L-aE)^2+E(r^2+a^2)-La^2\nTheta\n    =C+cos^2thetaleft((kappa+E^2)a^2-fracL^2sin^2thetaright)\nendalign","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"are the radial and inclination potentials that depend on the previously mentioned conserved quantities along with the Carter constant C.","category":"page"},{"location":"kerr_geodesic_summary/#Integral-solutions","page":"Theory","title":"Integral solutions","text":"","category":"section"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"A noteworthy fact is that null geodesics, kappa=0, only depend on the reduced Carter constant and angular momentum","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"beginalign\n    lambda\n        =fracLE\n    eta\n        =fracCE^2\nendalign","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"We use this freedom to fix E=1 and write the  radial and inclination potentials for null geodesics as,","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"beginalign\nmathcal R\n    =-Deltaeta + (lambda-a)^2+(r^2+a^2)-lambda a^2\nTheta\n    =eta+cos^2thetaleft(a^2-fraclambda^2sin^2thetaright)\nendalign","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"The Hamilton-Jacobi Equations then reduce to four first order differential equations: ","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"beginalign\nfracSigmaEdot r\n    = sqrtmathcal R\nfracSigmaEdot theta\n    = sqrtTheta\nfracSigmaEdot phi\n    = fracaDelta(r^2+a^2-alambda)+fraclambdasin^2theta-a\nfracSigmaEdot t\n    = fracr^2+a^2Delta(r^2+a^2-alambda)+a(lambda-asin^2theta)\n\nendalign","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"a fact which follows from the relationship, dot x^mu=p^mu=g^munupartial_nu S. Equations (15)-(18) define a 'Kepler-like' problem where a new parameter, known as the Mino time tau, is defined in terms of an integral in r or theta, and acts similar to the Keplerian coordinate time in that problem. The Mino time is defined by its relationship to the affine parameter by dtau=dtildetauSigma. Furthermore, Equations (15) and (16) imply that the Mino time can be written as a function of r or theta through the relationships,","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"beginalign\ntau=tau_r(r_fr_i)\n    =ointsqrtRdrtext and\ntau=tau_theta(theta_ftheta_i)\n    =ointsqrtThetadtheta\nendalign","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"These equations are useful since tau_theta and tau_r can be inverted to write,","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"beginalign\ntheta_i\n    =tau_theta^-1(tautheta_f)\nr_i\n    =tau_r^-1(taur_f)\n\nendalign","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"Thus for a given t_f r_f theta_f phi_f lambda and eta, one can choose to parameterize the solutions of equations (15)-(18) by either Deltataur_i or theta_i.","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"More details on this formalism and the solutions can be found in this review artivle by Gralla & Lupsasca[GL]","category":"page"},{"location":"kerr_geodesic_summary/#Linear-Polarization","page":"Theory","title":"Linear-Polarization","text":"","category":"section"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"The existence of the Penrose-Walker constant makes linear polarization directly derivable from a conserved quantity in Kerr spacetimes.","category":"page"},{"location":"kerr_geodesic_summary/#References","page":"Theory","title":"References","text":"","category":"section"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"[PW]: Walker, M., Penrose, R. On quadratic first integrals of the geodesic equations for type {22} spacetimes. Commun.Math. Phys. 18, 265–274 (1970).","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"[Carter]: Brandon Carter Phys. Rev. 174, 1559 – Published 25 October 1968","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"[BL]: Robert H. Boyer, Richard W. Lindquist; Maximal Analytic Extension of the Kerr Metric. J. Math. Phys. 1 February 1967; 8 (2): 265–281.","category":"page"},{"location":"kerr_geodesic_summary/","page":"Theory","title":"Theory","text":"[GL]: Samuel E. Gralla and Alexandru LupsascaPhys. Rev. D 101, 044032","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = Kang","category":"page"},{"location":"#Kang","page":"Home","title":"Kang","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for Kang.","category":"page"},{"location":"#Pages","page":"Home","title":"Pages","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"kerr_geodesics_summary.md\",\n    \"api.md\",\n    ]","category":"page"}]
}